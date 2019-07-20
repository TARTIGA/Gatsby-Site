import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import PermIdentity from "@material-ui/icons/PermIdentity"
import Hidden from "@material-ui/core/Hidden"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import { Link } from "gatsby"
import mainMenu from "../factories/mainMenu"

import { ThemeProvider } from "@material-ui/styles"
// import logo from "../images/icon.png"
const drawerWidth = 240
const headerHeight = 100
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#fafafa",
    color: "#0071BC",
    height: headerHeight,
    justifyContent: "center",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
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
    fontSize: 10,
    fontWeight: 700,
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
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
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
    fontSize: 14,
    lineHeight: "30px",
    color: "#0071BC",
    textDecoration: "none",
    backgroundImage: "none",
  },
  menuPersonal: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: 14,
  },
  mainBanner: {
    background: "linear-gradient(90deg, #0071BC 7.68%, #088FE9 92%)",
    height: 920,
  },
  about: {
    background: "rgba(245, 245, 245, 0.65);",
    height: 693,
  },
  documents: {
    background: "#fff",
    height: 780,
  },
  documentBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 36,
    width: 250,
    height: 184,
    background: "rgba(1, 124, 186, 0.75)",
    border: "0.5px solid #7BDAFF",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 146, 199, 0.7)",
    borderRadius: "10px",
  },
}))

export default ({ title, children }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Container maxWidth="lg">
            <Grid container className={classes.menuContainer}>
              <Grid item xs={3}>
                <Link className={classes.titleLink} to="/">
                  <Typography variant="h6" noWrap className={classes.title}>
                    B-helper.ru
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    noWrap
                    className={classes.subTitle}
                  >
                    Помощник современного предпринимателя
                  </Typography>
                </Link>
              </Grid>
              <Hidden smDown>
                <Grid item xs={6}>
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

                <Grid item xs={3} className={classes.menuPersonal}>
                  <PermIdentity />
                  <span>Личный кабинет</span>
                </Grid>
              </Hidden>
            </Grid>

            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          {mainMenu.map((item, idx) => (
            <Link key={idx} className={classes.menuItem} to={item.link}>
              {item.title}
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
