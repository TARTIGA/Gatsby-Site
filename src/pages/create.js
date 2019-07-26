import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import TextField from "@material-ui/core/TextField"
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
import { MyDocument } from "../components/pdf"

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}))

export default () => {
  const classes = useStyles()
  const [values, setValues] = useState({
    label1: "LLLLLLLL",
    label2: "TEXTTEXT",
  })
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }
  return (
    <Layout>
      <h1>Создать документы </h1>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="label1"
          className={classes.textField}
          value={values.label1}
          onChange={handleChange("label1")}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="label2"
          className={classes.textField}
          value={values.label2}
          onChange={handleChange("label2")}
          margin="normal"
        />
      </form>
      <PDFViewer width="100%" height="500px">
        <MyDocument label1={values.label1} label2={values.label2} />
      </PDFViewer>
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </Layout>
  )
}
