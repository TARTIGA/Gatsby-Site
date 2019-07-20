import React from "react"
import Box from "@material-ui/core/Box"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import AddCircle from "@material-ui/icons/AddCircle"
const useStyles = makeStyles(theme => ({
  documentBlock: {
    color: "#fff",
    display: "flex",
    fontSize: 36,
    height: 184,
    background: "rgba(1, 124, 186, 0.75)",
    border: "0.5px solid #7BDAFF",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 146, 199, 0.7)",
    borderRadius: "10px",
    fontSize: 24,
    lineHeight: 28,
  },
}))
export default ({ title, link }) => {
  const classes = useStyles()
  return (
    <Box
      className={classes.documentBlock}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography align="center" variant="h6">
        {title}
      </Typography>
      <AddCircle></AddCircle>
    </Box>
  )
}
