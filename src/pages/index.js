import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet" // for title desc in short SEO
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import DocBlock from "../components/DocBlock"
import docTypes from "../factories/docTypes"
import Grid from "@material-ui/core/Grid"
const drawerWidth = 240
const headerHeight = 100

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
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
}))
export default ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Layout headerTitle="хуй">
      <Helmet>
        <meta charSet="utf-8" />
        <title>IP PROJECT DOC</title>
      </Helmet>
      <Box className={classes.mainBanner}>
        <div className={classes.drawerHeader} />
        <Container maxWidth="lg">
          <Typography variant="h3" noWrap color="secondary">
            B-helper.ru
          </Typography>
          <Typography variant="h5" noWrap color="secondary">
            Личный кабинет с возможностью сохранить реквизиты
          </Typography>
          <Typography variant="h5" noWrap color="secondary">
            Документы можно отправить сразу на электронную почту
          </Typography>
          <Typography variant="h5" noWrap color="secondary">
            Создавай документы бесплатно
          </Typography>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Typography noWrap color="secondary">
            Приложение на смартфон
          </Typography>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Container>
      </Box>
      <Box className={classes.about}>
        <Container maxWidth="lg">
          <Typography variant="h3" noWrap color="primary">
            О сервисе
          </Typography>
          <Typography variant="p" align="left" color="primary">
            Господа, высокотехнологичная концепция общественного уклада, в своем
            классическом представлении, допускает внедрение распределения
            внутренних резервов и ресурсов. Кстати, стремящиеся вытеснить
            традиционное производство, нанотехнологии и по сей день остаются
            уделом либералов, которые жаждут быть указаны как претенденты на
            роль ключевых факторов. Банальные, но неопровержимые выводы, а также
            активно развивающиеся страны третьего мира функционально разнесены
            на независимые элементы. Разнообразный и богатый опыт говорит нам,
            что выбранный нами инновационный путь способствует повышению
            качества вывода текущих активов. Кстати, элементы политического
            процесса будут призваны к ответу! Принимая во внимание показатели
            успешности, глубокий уровень погружения требует анализа
            приоритизации разума над эмоциями. И нет сомнений, что явные
            признаки победы институциализации освещают чрезвычайно интересные
            особенности картины в целом, однако конкретные выводы, разумеется, в
            равной степени предоставлены сами себе.
          </Typography>
        </Container>
      </Box>
      <Box className={classes.documents}>
        <Container maxWidth="lg">
          <Typography variant="h3" noWrap color="primary">
            Какой документ необходимо создать?
          </Typography>
          <Grid container direction="row" alignItems="center" spacing={2}>
            {docTypes.map((item, idx) => (
              <Grid key={idx} item xs={6} sm={3}>
                <DocBlock title={item.title} link={item.link} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `
