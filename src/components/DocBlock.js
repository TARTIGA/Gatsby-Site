import React from "react"
import Box from "@material-ui/core/Box"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Icon from "@material-ui/core/Icon"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  documentBlock: {
    color: "#fff",
    display: "flex",
    fontSize: 36,
    height: 184,
    background: "#017CBA",
    border: "0.5px solid #7BDAFF",
    boxSizing: "border-box",
    boxShadow: "0px 2px 2px rgba(0, 146, 199, 0.7)",
    borderRadius: 10,
    fontSize: 24,
    padding: "10px",
  },
  blocLink: {
    color: "#0071BC",
    textDecoration: "none",
    backgroundImage: "none",
    textShadow: "none",
    "&:hover $icon": {
      color: "#7BDAFF",
    },
  },
  title: {
    color: "#fff",
    fontSize: "0.8em",
    fontWeight: 500,
    marginBottom: 26,
  },
  icon: {
    color: "#fff",
    fontSize: "1.6em",
  },
}))
export default ({ title, link }) => {
  const classes = useStyles()
  return (
    <Link className={classes.blocLink} to={link}>
      <Box
        className={classes.documentBlock}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography align="center" variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Icon className={classes.icon}>add_circle</Icon>
      </Box>
    </Link>
  )
}
