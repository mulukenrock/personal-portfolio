<template>
  <div id="experience">
    <v-row class="timeline-top" align="center" justify="center">
      <v-col cols="12" md="8" lg="8" class="px-8 px-sm-10 px-md-2 px-lg-10">
        <h4 class="white--text my-2 mb-6 text-left">Experience / Projects</h4>
        <div class="timeline">
          <vue-timeline-update
            v-for="(experience, index) in experiences"
            :key="index"
            @click="experience.show = !experience.show"
            :date="experience.date"
            :title="experience.show ? experience.titleUp : experience.titleDown"
            :description="experience.show ? experience.description : null"
            icon="code"
            color="red"
            :thumbnail="experience.thumbnail"
            :is-last="experience.is_last"
            :category="experience.category"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          titleUp:
            "Senior Software Engineer &nbsp;&nbsp; <i class='fa-solid fa-chevron-up'></i>",
          titleDown:
            "Senior Software Engineer &nbsp;&nbsp; <i class='fa-solid fa-chevron-down'></i>",
          date: new Date("2021-05-10"),
          description: `
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
                            <li>Authentication and Setting - user signup, sign in, roles, permissions, settings, etc </li>
                            <li>Patient - appointment, triage, MCH, admissions, etc </li>
                            <li>Laboratory and Imaging - tests, orders, results, reports, etc </li>
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
                      </ul>
                      `,
          show: true,
          is_last: false,
          thumbnail: "orbit-health.png",
          category: "Current",
        },
        {
          titleUp:
            "Front End Developer &nbsp;&nbsp; <i class='fa-solid fa-chevron-up'></i>",
          titleDown:
            "Front End Developer &nbsp;&nbsp; <i class='fa-solid fa-chevron-down'></i>",
          date: new Date("2022-03-01"),
          description: `
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
                      </ul>
                      <li> #Vue.js #Typescript #TailwindCSS </li>
                      `,
          show: false,
          is_last: false,
          thumbnail: "gebere.png",
        },
        {
          titleUp:
            "Senior Backend Developer &nbsp;&nbsp; <i class='fa-solid fa-chevron-up'></i>",
          titleDown:
            "Senior Backend Developer &nbsp;&nbsp; <i class='fa-solid fa-chevron-down'></i>",
          date: new Date("2021-05-22"),
          description: `
                      <a target='_blank' alt='Ekub' rel='noopener noreferrer' style='text-decoration: none'>
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
                        <li>It has specific rules and guidelines. People will gather in groups to save money weekly, monthly, or annually.</li> 
                        <li>There's a lot drawn on specific dates and it will be allotted to one of the group members.</li>
                        <li>You can also borrow from the Ekub in case of emergency.</li>
                        <li>We have automated the process and eliminated paperworks.</li>
                      </ul>
                      <li>#Node.js #GraphQL #Hasura #Express.js</li>
                      `,
          show: false,
          is_last: false,
          thumbnail: "ekub.png",
        },
        {
          titleUp:
            "Backend Developer &nbsp;&nbsp; <i class='fa-solid fa-chevron-up'></i>",
          titleDown:
            "Backend Developer &nbsp;&nbsp; <i class='fa-solid fa-chevron-down'></i>",
          date: new Date("2021-05-22"),
          description: `
                      <a target='_blank' alt='Ekub' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #a7121d'>Company: Tiyake</b>
                      </a>
                      <br />
                      <br />
                      <a target='_blank' alt='Gebere' rel='noopener noreferrer' style='text-decoration: none'>
                        <b style='color: #e2e2e2'>#Project: Tiyake</b> 
                      </a>
                      <ul style='color: grey'>
                        <b>August 2021 - January 2022</b>
                        <li>Tiyake is a stackoverflow like application where anyone can post questions and people respond to his question</li>
                        <li>Users can answer, comment, upvote, and downvote questions/answers</li> 
                        <li>There are special moderators that controls the moral guidelines of the app is maintained.</li>
                      </ul>
                      <li>#Node.js #GraphQL #Hasura #Express.js</li>
                      `,
          show: false,
          is_last: false,
          thumbnail: "tiyake.png",
        },
        {
          titleUp:
            "Full-stack Developer &nbsp;&nbsp; <i class='fa-solid fa-chevron-up'></i>",
          titleDown:
            "Full-stack Developer &nbsp;&nbsp; <i class='fa-solid fa-chevron-down'></i>",
          date: new Date("2019-09-11"),
          description: `
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
                      `,
          show: false,
          is_last: false,
          thumbnail: "minab.png",
        },
        {
          titleUp:
            "Full-stack Developer &nbsp;&nbsp; <i class='fa-solid fa-chevron-up'></i>",
          titleDown:
            "Full-stack Developer &nbsp;&nbsp; <i class='fa-solid fa-chevron-down'></i>",
          date: new Date("2018-06-20"),
          description: `
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
                      `,
          show: false,
          is_last: true,
          thumbnail: "epsilon.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
