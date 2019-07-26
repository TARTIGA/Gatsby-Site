import React, { useState } from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  SwipeableDrawer,
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  IconButton,
  Hidden,
  Container,
  Grid,
  Icon,
  Divider,
  Box,
} from "@material-ui/core"
import { Link } from "gatsby"
import mainMenu from "../factories/mainMenu"
// import logo from "../images/icon.png"
const drawerWidth = "70%"
const headerHeight = 100
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    top: 0,
    background: "#fafafa",
    color: "#0071BC",
    height: headerHeight,
    justifyContent: "center",
  },
  title: {
    color: "#0071BC",
    fontWeight: 900,
    flexGrow: 1,
  },
  titleLink: {
    color: "#0071BC",
    fontWeight: 900,
    background: "none",
  },
  subTitle: {
    fontSize: "0.6em",
    fontWeight: 700,
    color: "#000",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    paddingTop: headerHeight,
    overflow: "hidden",
  },
  menuContainer: {
    alignItems: "center",
  },
  menuListContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    justifyContent: "space-between",
  },
  menuItem: {
    justifyContent: "center",
    fontSize: "0.8em",
    lineHeight: "30px",
    color: "#0071BC",
    textDecoration: "none",
    backgroundImage: "none",
  },
  menuPersonal: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "0.8em",
  },
  menuPersonalLink: {
    color: "#0071BC",
    textDecoration: "none",
    backgroundImage: "none",
    display: "flex",
    alignItems: "center",
  },
  menuPersonalIcon: {
    marginRight: "0.7em",
    fontSize: "1.4em",
  },
  menuIcon: {
    fontSize: "48px",
  },
  menuDrawerContainer: {},
  menuDrawerBtn: {
    minHeight: "48px",
  },
  menuDrawerIcon: {
    color: "#0071BC",
  },
  menuDrawerLink: {
    color: "#0071BC",
    textShadow: "none",
    backgroundImage: "none",
  },
  backBtnDrawer: {
    position: "absolute",
    top: "auto",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
  },
}))

export default ({ title, children, fullContainer }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Container>
            <Grid
              container
              className={classes.menuContainer}
              justify="space-between"
            >
              <Grid item xs={8} sm={6} md={3}>
                <Link className={classes.titleLink} to="/">
                  <Typography variant="h6" noWrap className={classes.title}>
                    B-helper.ru
                  </Typography>
                  <Typography noWrap className={classes.subTitle}>
                    Помощник современного предпринимателя
                  </Typography>
                </Link>
              </Grid>
              <Hidden smDown>
                <Grid item xs={6} md={6}>
                  <List className={classes.menuListContainer}>
                    {mainMenu.map((item, idx) => (
                      <Link
                        key={idx}
                        className={classes.menuItem}
                        to={item.link}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </List>
                </Grid>

                <Grid item md={3} className={classes.menuPersonal}>
                  <Box justify="center" alignItems="center">
                    <Link
                      className={classes.menuPersonalLink}
                      to="/registration"
                    >
                      <Icon className={classes.menuPersonalIcon}>
                        person_outline
                      </Icon>
                      <span>Личный кабинет</span>
                    </Link>
                  </Box>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid item xs={2} sm={6}>
                  <Box width="100%" display="flex" justifyContent="flex-end">
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      edge="end"
                      onClick={toggleDrawer}
                      className={clsx(open && classes.hide)}
                    >
                      <Icon className={classes.menuIcon}>menu</Icon>
                    </IconButton>
                  </Box>
                </Grid>
              </Hidden>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {fullContainer ? children : <Container>{children}</Container>}
      </main>
      <SwipeableDrawer
        swipeAreaWidth={30}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link className={classes.titleLink} to="/">
              <Typography variant="h6" noWrap className={classes.title}>
                B-helper.ru
              </Typography>
            </Link>
          </Box>
        </div>
        <Divider />
        <List
          dense
          component="div"
          role="list"
          className={classes.menuDrawerContainer}
        >
          {mainMenu.map((item, idx) => (
            <ListItem
              key={idx}
              role="listitem"
              button
              className={classes.menuDrawerBtn}
            >
              <ListItemIcon className={classes.menuDrawerIcon}>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText>
                <Link className={classes.menuDrawerLink} to={item.link}>
                  {item.title}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Box className={classes.backBtnDrawer}>
          <IconButton onClick={toggleDrawer}>
            {theme.direction === "rtl" ? (
              <Icon>chevron_left</Icon>
            ) : (
              <Icon>chevron_right</Icon>
            )}
          </IconButton>
        </Box>
      </SwipeableDrawer>
    </div>
  )
}
