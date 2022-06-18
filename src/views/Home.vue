<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <nav-bar />
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="4" class="d-flex child-flex">
          <v-img
            src="muluken-getachew.png"
            contain
            height="400"
            class="normalpic"
            alt="Muluken Getachew"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="3" class="text-sm-left text-center">
          <h5 class="red--text text--darken-1 title font-weight-bold">
            Hey, I'm Muluken
          </h5>
          <vue-typer
            :text="[
              'Software Engineer',
              'Full-stack Developer',
              'Tech Enthusiast',
            ]"
            :shuffle="true"
            eraseStyle="backspace"
            eraseDelay="20"
          ></vue-typer>
          <p class="grey--text">
            A full-stack developer specializing in Vue.js, Node.js, Express.js,
            HASURA, and Nuxt.js!
            <br />
            <br />
            4 years of overall experience!
          </p>
          <v-btn
            v-for="(icon, index) in icons"
            :key="index"
            class="mr-4 text-left mb-4"
            icon
          >
            <v-tooltip
              bottom
              color="white"
              content-class="font-weight-bold red--text"
            >
              <template v-slot:activator="{ on }">
                <a :href="icon.link" target="_blank" rel="noopener noreferrer">
                  <v-icon
                    v-on="on"
                    size="24px"
                    color="red"
                    class="text-left zoom"
                    >{{ icon.image }}</v-icon
                  >
                </a>
              </template>
              <span>{{ icon.name }}</span>
            </v-tooltip>
          </v-btn>
          <div>
            <a
              href="https://github.com/mulukenrock/files/blob/main/muluken-cv-small.pdf"
              target="_blank"
              rel="cv"
            >
              <v-btn rounded color="#a7121d" dark>
                <v-icon size="20px" color="white" class="text-left mr-3">{{
                  "fa fa-envelope"
                }}</v-icon>
                Download Resume
              </v-btn>
            </a>
          </div>
        </v-col>
        <v-col cols="12" class="padd" id="abt">
          <div id="about">
            <v-col
              cols="12"
              md="8"
              lg="6"
              offset-md="2"
              offset-lg="3"
              class="text-left px-8 px-md-0"
            >
              <h4 class="white--text mb-3">About Me</h4>
              <p class="grey--text">
                I'm highly motivated, and I enjoy problem-solving and logical
                thinking. I'm good at collaboration & teamwork, creativity,
                communication, time management, and attention to detail. My
                career goal is to apply my knowledge in the field of designing,
                development, and maintenance to cater to the specific needs of
                the people and grow in my profession.
              </p>
            </v-col>
          </div>
          <div id="education">
            <v-row justify="center">
              <v-col cols="12" md="8" lg="6" class="px-10 px-md-2">
                <h4 class="white--text text-left">Education</h4>
                <v-timeline align-top dense reverse>
                  <v-timeline-item
                    v-for="(item, i) in items"
                    :key="i"
                    :color="item.color"
                    :icon="item.icon"
                    fill-dot
                  >
                    <template v-slot:opposite>
                      <span
                        :class="`headline font-weight-bold white--text`"
                        v-text="item.year"
                      ></span>
                    </template>
                    <v-card :color="item.color" dark>
                      <v-card-title class="py-2">
                        <h5 class="white--text">
                          B.SC with honours (Software Engineering)
                        </h5>
                        <v-spacer />
                        <h5 class="white--text">2019</h5>
                      </v-card-title>
                      <v-card-text
                        :style="{ background: item.background }"
                        class="py-3"
                      >
                        <v-img
                          src="aastu.jpeg"
                          contain
                          width="120"
                          height="120"
                        ></v-img>
                        <ul class="grey--text mt-3">
                          <li>
                            Addis Ababa Science and Technology University
                            (AASTU)
                          </li>
                          <li>
                            First Class Honours - Cumulative GPA of 3.75 / 4.0
                          </li>
                          <li>Graduation Year - 2019</li>
                        </ul>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>
                </v-timeline></v-col
              >
            </v-row>
          </div>
          <div id="experience">
            <v-row class="timeline-top" align="center" justify="center">
              <v-col cols="12" md="8" lg="6" class="px-10 px-md-2">
                <h4 class="white--text my-2 mb-6 text-left">
                  Experience / Projects
                </h4>
                <div class="timeline">
                  <vue-timeline-update
                    :date="new Date('2022-04-05')"
                    title="Senior Software Engineer"
                    :description="`
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #a7121d'>Company: Orbit Inc.</b>
                      </a>
                      <br />
                      <br />
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #e2e2e2'>#Project: Orbit 2.0</b> 
                      </a>
                      <ul style='color: grey'>
                        <b>May 2021 - Present</b>
                        <li>Orbit 2.0 is a health care management system that automates almost every action of a healthcare facility.</li>
                        <li>It's a very big project and has 6 modules, namely:
                          <ul>
                            <li>authentication - user signup, sign in, roles, permissions, etc </li>
                            <li>setting - all settings of the system </li>
                            <li>Patient - appointment, triage, MCH, admissions, etc </li>
                            <li>Laboratory - tests, orders, results, reports, etc </li>
                            <li>Imaging - tests, orders, results, reports, etc </li>
                            <li>Pharmacy - prescriptions, dispenses, inventory, reports. etc </li>
                            <li>Finance - invoices, finance-groups, deposits, reports, etc </li>
                          </ul>
                        </li>
                        <li>Orbit 2.0 is a complete rewrite of orbit 1.0 which is believed to have a bad design, implementation and old technology.</li>
                        <li>Output - Many facilities were able to eliminate paper based work and serve customers well.</li>
                      </ul>
                      <li>#Vue.js #Node.js #Nuxt.js #GraphQL #Jira #ApolloClient #JWT #PostgreSQL #Express.js </li>
                      <br />
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #e2e2e2'>#Project: Orbit 3.0</b> 
                      </a>
                      <ul style='color: grey'>
                        <b>December 2021 - Present</b>
                        <li>It's the cloud-ready version of orbit 2.0. </li>
                        <li>Whichever healthcare facility residing anywhere in the world can use this app on the cloud.</li>
                        <li>When it's finished we are hoping to accept clients from all over the world, not just Ethiopia.</li>
                      </ul>
                      <li>#Vue.js #Node.js #Nuxt.js #GraphQL #Jira #ApolloClient #JWT #PostgreSQL #Express.js </li>
                      `"
                    icon="code"
                    color="red"
                    :thumbnail="'orbit-health.png'"
                  />
                  <vue-timeline-update
                    :date="new Date('2022-03-01')"
                    title="Front End Developer"
                    :description="`
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #a7121d'>Company: Gebere Inc.</b> 
                      </a>
                      <br />
                      <br />
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #e2e2e2'>#Project: Gebere</b> 
                      </a>
                      <ul style='color: grey'>
                        <b>October 2021 - March 2022</b>
                        <li>Gebere(Meaning farmer in Amharic) is a crowd farming web app that is aimed to provide public funding to farming-related projects </li> 
                        <li>It has two separate front-end deployments. One is intended for investors and is public while the other app is an admin's app that is intended to control the general behavior of the system. </li>
                        <li>Projects with how much money they need and other details are defined in the admin app and will be accessible to the public via the investor's app. </li>
                        <li>The project is yet to be implemented on the ground but it's believed to mitigate the lack of funding in the agricultural sector of Ethiopia.</li>
                      </ul>
                      <li> #Vue.js #Typescript #TailwindCSS </li>
                      `"
                    icon="code"
                    color="red"
                    :thumbnail="'gebere.png'"
                  />
                  <vue-timeline-update
                    :date="new Date('2022-04-01')"
                    title="Senior Backend Developer"
                    :description="`
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #a7121d'>Company: Ekub Inc.</b>
                      </a>
                      <br />
                      <br />
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #e2e2e2'>#Project: Ekub</b> 
                      </a>
                      <ul style='color: grey'>
                        <b>May 2021 - Present</b>
                        <li>Ekub is an Ethiopian ROSCA(rotating savings and credit association) system. </li>
                        <li>It has specific rules and guidelines.</li> 
                        <li>People will gather in groups to save money weekly, monthly, or annually.</li> 
                        <li>There's a lot drawn on specific dates and it will be allotted to one of the group members.</li>
                        <li>You can also borrow from the Ekub in case of emergency.</li>
                        <li>We have tried to automate the process and eliminate any paperwork.</li>
                        <li> It's yet to be implemented on the ground, but I believe it will bring a big change to the rosca system in Ethiopia.</li>
                      </ul>
                      <li>#Node.js #GraphQL #Express.js</li>
                      `"
                    icon="code"
                    color="red"
                    :thumbnail="'ekub.png'"
                  />
                  <vue-timeline-update
                    :date="new Date('2021-05-01')"
                    title="Full-stack Developer"
                    :description="`
                      <a target='_blank' alt='Minab Tech' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #a7121d'>Company: Minab Tech</b>
                      </a>
                      <br />
                      <br />
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #e2e2e2'>#Project: JCC NRP</b> 
                      </a>
                      <ul style='color: grey'>
                        <b>December 2020 - May 2021</b>
                        <li>JCC NRP is a platform for both local and overseas jobs seekers to register and take automated assessments for digital workforce mapping, screening as well as job placement. </li>
                        <li>It is designed to register, build profiles, provide free screening, keep track of all training, testing & certification of overseas job seekers while digitalizing the documentation process for legal and safe ways of working abroad. </li>
                        <li>In doing so the platform will also be able to map out the national jobseeker landscape and provide a data-driven job matching public services for both local and foreign needs.</li>
                        <li>Job seekers were able to register, build their profile, take automated assessments and get matched to a job.</li>
                      </ul>
                      <li>#Vue.js #Node.js #Nuxt.js #PostgreSQL #GraphQL #Hasura #Express.js</li>
                      <br />
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #e2e2e2'>#Project: Hahujobs University</b> 
                      </a>
                      <ul style='color: grey'>
                        <b>September 2020 - February 2021</b>
                        <li>HahuJobs University is a web application that is intended to provide a much-needed remote digital content provision for students both in university and TVET schools in the wake of this pandemic which largely affected their learning process as all students were made to stay at home. </li>
                        <li>Universities will register and get verified, and will post course contents (video, pdf, images etc), announcements etc to their students or even to the public. </li>
                        <li>Students can download and comment on posts and announcements.</li>
                      </ul>
                      <li>#GraphQL #Express.js #Nuxt.js #PostgreSQL #Node.js #Vue.js #vuetify</li>
                      <br />
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #e2e2e2'>#Project: HRMS (Human resource management system)</b> 
                      </a>
                      <ul style='color: grey'>
                        <b>September 2019 - September 2020</b>
                        <li>It's a human resource management system that has employee registration/termination, attendance management, payroll management, leave management, training management modules.</li>
                        <li>Our clients were able to eliminate paperwork regarding human resource management! And hence they have become more productive.</li>
                        <li>They were also able to eliminate erroneous manual work as the system will do it for them - for example, calculating salaries of employees according to their attendance and paid/unpaid leaves.</li>
                      </ul>
                      <li>#Vue.js #Node.js #Loopback.js #MongoDB</li>
                      <br />
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #e2e2e2'>#Project: Website for Habesha Entrepreneurs credit and saving Association</b> 
                      </a>
                      <ul style='color: grey'>
                        <b>December 2020 - March 2021</b>
                        <li>Habesha Entrepreneurs credit and saving Association (SACCO) is established to narrow the financial gap of SME entrepreneurs, create market linkage, and shorten unnecessary market chains.</li>
                        <li>Output - The company was able to register more members using the website and grow!</li>
                        <li>
                          <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none' href='https://habeshaentreprenurssacco.com/'>
                            Link: https://habeshaentreprenurssacco.com/
                          </a>
                        </li>
                      </ul>
                      <li>#Vue.js #Nuxt.js #GraphQL #Hasura</li>
                      `"
                    icon="code"
                    color="red"
                    :thumbnail="'minab.png'"
                  />
                  <vue-timeline-update
                    :date="new Date('2018-11-01')"
                    title="Full-stack Developer"
                    :description="`
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #a7121d'>Company: Epsilon Technologies</b>
                      </a>
                      <br />
                      <br />
                      <a target='_blank' alt='epsilon' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #e2e2e2'>#Project: Taza Jobs</b> 
                      </a>
                      <ul style='color: grey'>
                        <b>November 2018 - February 2020</b>
                        <li>TazaJobs is a job finding and recruiting system designed to simplify the process of job finding and recruitment. </li>
                        <li>It contains a mobile application suited for job seekers and a web-app for employers. </li>
                        <li>How it works is you choose your job interests and, get jobs based on those interests. You can also get full details of the companies posting the jobs. You can save a job and access it another time.</li>
                        <li>Output - Job seekers were able to find and apply to thousands of jobs from the comfort of their homes. They were also able to build a professional CV than they can apply with. </li>
                        <li>Output - Employers were able to easily post their job vacancies and reach out to job seekers!</li>
                      </ul>
                      <li>#Vue.js #MongoDB #Node.js #Loopback.js #JWT</li>
                      `"
                    icon="code"
                    color="red"
                    :thumbnail="'epsilon.jpg'"
                  />
                </div>
              </v-col>
            </v-row>
          </div>
          <div id="tools">
            <v-row align="center" justify="center" class="mx-1">
              <v-col cols="12">
                <h4 class="white--text my-2 mt-6 text-center">
                  Programming Languages / Tools
                </h4>
              </v-col>
              <Logo
                src="https://img.icons8.com/color/96/000000/vue-js.png"
                name="Vue"
              />
              <Logo
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-nuxt-js-a-free-and-open-source-web-application-framework-logo-color-tal-revivo.png"
                name="Nuxt Js"
              />
              <Logo
                src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark.svg"
                name="Vuetify"
              />
              <Logo src="hasura.png" name="Hasura" />
              <Logo
                src="https://img.icons8.com/fluency/96/000000/node-js.png"
                name="Node Js"
              />
              <Logo
                src="https://img.icons8.com/color/2x/graphql.png"
                name="GraphQL"
              />
              <Logo
                src="https://img.icons8.com/color/96/000000/postgreesql.png"
                name="PostgreSQL"
              />
              <Logo
                src="https://img.icons8.com/color/96/000000/mongodb.png"
                name="MongoDB"
              />
              <Logo
                src="https://img.icons8.com/fluency/96/000000/docker.png"
                name="Docker"
              />
              <Logo
                :customStyle="{ background: '#fff' }"
                src="expressjs-icon.png"
                name="Express"
              />
              <Logo
                src="https://img.icons8.com/color/96/000000/javascript.png"
                name="JavaScript"
              />
              <Logo
                src="https://img.icons8.com/color/96/000000/typescript.png"
                name="TypeScript"
              />
              <Logo
                src="https://img.icons8.com/color/96/000000/git.png"
                name="Git"
              />
              <Logo
                src="https://img.icons8.com/color/96/000000/html-5.png"
                name="HTML"
              />
              <Logo
                src="https://img.icons8.com/color/96/000000/css3.png"
                name="CSS"
              />
              <Logo src="tailwindcss.png" name="Tailwind CSS" />
              <Logo
                src="https://img.icons8.com/color/96/000000/heroku.png"
                name="Heroku"
              />
              <Logo src="netlify.png" name="Netlify" />
              <Logo
                src="https://img.icons8.com/color/96/000000/gitlab.png"
                name="Gitlab"
              />
              <Logo
                :customStyle="{ background: '#fff' }"
                src="github.png"
                name="Github"
              />
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Logo from "../components/Logo";

export default {
  metaInfo: {
    titleTemplate: "Muluken Getachew %s",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Muluken Getachew, software enginner, portfolio site, personal website",
      },
    ],
  },
  name: "Home",
  components: {
    NavBar,
    Footer,
    Logo,
  },
  created() {
    this.post_visit();
  },
  data() {
    return {
      icons: [
        {
          name: "Telegram",
          image: "fab fa-telegram",
          link: "https://t.me/getMuluqen",
        },
        {
          name: "Linked In",
          image: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/mulukenrock/",
        },
        {
          name: "Email",
          image: "fa fa-envelope",
          link: "mailto: mulukenrock@gmail.com",
        },
        {
          name: "Github",
          image: "fab fa-github",
          link: "https://github.com/mulukenrock",
        },
        {
          name: "Stack Overflow",
          image: "fab fa-stack-overflow",
          link: "https://stackoverflow.com/users/14529454/ambassel",
        },
      ],
      items: [
        {
          color: "#a7121d",
          icon: "mdi-star",
          background: "#1e1e1e",
          year: 2019,
        },
      ],
    };
  },
  methods: {
    async post_visit() {
      try {
        await fetch(`${process.env.VUE_APP_VISIT_URL}/count`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            input: {
              page: "HOME",
            },
          }),
        });
      } catch (e) {
        return;
      }
    },
  },
};
</script>
<style scoped>
.top {
  margin-top: 180px;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #ce1d2a;
}

.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}

.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
.theme--light.v-timeline:before {
  background: #a7121d;
}
.gb-base-icon {
  color: yellow !important;
}

.gb-vue-timeline-update__ago {
  color: yellow !important;
}

a {
  text-decoration: none;
}
.normalpic {
  filter: opacity(0.9) drop-shadow(0 0 0 #111);
}
</style>

<style>
.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: bold;
  font-size: 32px;
}
.vue-typer .custom.char {
  color: #84a1ff;
}
.vue-typer .custom.char.selected {
  color: #a7121d;
}
.vue-typer .custom.caret {
  width: 1.5px;
  background-color: #fff;
}

.zoom:hover {
  transform: scale(1.5);
}
</style>
