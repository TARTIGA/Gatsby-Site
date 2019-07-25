import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet" // for title desc in short SEO
import Box from "@material-ui/core/Box"
import Fab from "@material-ui/core/Fab"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import DocBlock from "../components/DocBlock"
import docTypes from "../factories/docTypes"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Icon from "@material-ui/core/Icon"

import docs from "../images/docs.png"
import print from "../images/print.png"
import googleplay from "../images/googleplay.png"
const drawerWidth = 240
const headerHeight = 100

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  mainBlocks: {
    paddingBottom: "5em",
  },
  mainBanner: {
    paddingTop: "4em",
    background: "linear-gradient(90deg, #0071BC 7.68%, #088FE9 92%)",
    paddingBottom: "4em",
  },
  about: {
    background: "rgba(245, 245, 245, 0.65);",
  },
  documents: {
    background: "#fff",
  },
  bannerTitle: {
    fontSize: "2.3em",
    color: "#fff",
    fontWeight: 700,
    lineHeight: "1.5em",
  },
  bannerList: {
    paddingTop: "3.2em",
  },
  bannerListText: {
    color: "#fff",
    fontSize: "1.1em",
    fontWeight: 500,
    lineHeight: "2em",
  },
  bannerlistIcon: {
    color: "#fff",
    marginRight: "1.2em",
  },
  bannerButton: {
    background: "#fff",
    color: "#173D7A",
    fontSize: "0.8em",
    fontWeight: 700,
    marginRight: "1em",
    height: "4em",
  },
  mainPageTitle: {
    fontSize: "2em",
    fontWeight: 500,
    paddingTop: "2em",
    marginBottom: "2em",
  },

  mainPageTextAbout: {
    fontSize: "0.9em",
    fontWeight: 300,
    lineHeight: "1.5em",
  },
}))
export default ({ data }) => {
  const classes = useStyles()
  return (
    <Layout headerTitle="хуй">
      <Helmet>
        <meta charSet="utf-8" />
        <title>IP PROJECT DOC</title>
      </Helmet>

      <Box className={`${classes.mainBlocks}, ${classes.mainBanner}`}>
        <div className={classes.drawerHeader} />
        <Container maxWidth="lg">
          <Grid
            container
            justify="space-between"
            alignContent="center"
            spacing={2}
          >
            <Grid item md={8} sm={12} xs={12}>
              <Typography variant="h1" className={classes.bannerTitle}>
                Создание документов онлайн без скачивания программ!
              </Typography>
              <Box className={classes.bannerList}>
                <Box display="flex" alignItems="center">
                  <Icon className={classes.bannerlistIcon}>done</Icon>
                  <Typography variant="h3" className={classes.bannerListText}>
                    Личный кабинет с возможностью сохранить реквизиты
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Icon className={classes.bannerlistIcon}>done</Icon>
                  <Typography variant="h3" className={classes.bannerListText}>
                    Документы можно отправить сразу на электронную почту
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Icon className={classes.bannerlistIcon}>done</Icon>
                  <Typography variant="h3" className={classes.bannerListText}>
                    Создавай документы бесплатно
                  </Typography>
                </Box>
                <Box display="flex" justifyItems="start" mt={12}>
                  <Fab
                    aria-label="create"
                    variant="extended"
                    size="large"
                    className={classes.bannerButton}
                  >
                    Создать документы
                  </Fab>
                  <Fab
                    aria-label="registration"
                    variant="extended"
                    size="large"
                    className={classes.bannerButton}
                  >
                    ЗАРЕГИСТРИРОВАТЬСЯ
                  </Fab>
                </Box>
              </Box>
            </Grid>
            <Hidden mdDown>
              <Grid item md={4}>
                <Box justify="center" alignItems="center">
                  <img src={print} alt="Докумнты" />
                </Box>
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Box>
      <Box className={`${classes.mainBlocks} ${classes.about}`}>
        <Container maxWidth="lg">
          <Typography variant="h3" className={classes.mainPageTitle}>
            О сервисе
          </Typography>
          <Grid container justify="space-between" alignItems="center">
            <Grid item md={6} sm={12} xs={12}>
              <Typography align="left" className={classes.mainPageTextAbout}>
                Господа, высокотехнологичная концепция общественного уклада, в
                своем классическом представлении, допускает внедрение
                распределения внутренних резервов и ресурсов. Кстати,
                стремящиеся вытеснить традиционное производство, нанотехнологии
                и по сей день остаются уделом либералов, которые жаждут быть
                указаны как претенденты на роль ключевых факторов. Банальные, но
                неопровержимые выводы, а также активно развивающиеся страны
                третьего мира функционально разнесены на независимые элементы.
                Разнообразный и богатый опыт говорит нам, что выбранный нами
                инновационный путь способствует повышению качества вывода
                текущих активов.
              </Typography>
              <p></p>
              <Typography align="left" className={classes.mainPageTextAbout}>
                Кстати, элементы политического процесса будут призваны к ответу!
                Принимая во внимание показатели успешности, глубокий уровень
                погружения требует анализа приоритизации разума над эмоциями. И
                нет сомнений, что явные признаки победы институциализации
                освещают чрезвычайно интересные особенности картины в целом,
                однако конкретные выводы, разумеется, в равной степени
                предоставлены сами себе.
              </Typography>
            </Grid>
            <Hidden mdDown>
              <Grid item md={4}>
                <img src={docs} alt="Докумнты" />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Box>
      <Box className={`${classes.mainBlocks}, ${classes.documents}`}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={classes.mainPageTitle}>
            Какой документ необходимо создать?
          </Typography>
          <Grid container direction="row" alignItems="center" spacing={10}>
            {docTypes.map((item, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={3}>
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
