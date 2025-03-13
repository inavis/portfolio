import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            item1: "Home",
            item2: "About",
            item3: "Skills",
            item4: "Work",
            item5: "CV",
          },
          banner: {
            title: "I'm a React Web Developer",
            text: "I specialize in building dynamic and responsive user interfaces with a keen eye for design and performance.",
            btnText: "About Me",
          },
          about: {
            mainTitle: "About Me",
            subTitle: "Know Me More",
            text1: "I'm",
            text2:
              "Highly motivated React JS Developer interested in building and optimizing web applications, with a strong focus on creating  efficient, reusable components and enhancing user experiences.",
            text3:
              " Experienced in collaborating within agile teams, integrating RESTful APIs, and employing best practices for performance  optimization. Passionate about leveraging cutting-edge technologies to solve complex problems and deliver high-quality solutions.",
            title1: "Name",
            title2: "From",
            title3: "Date of Birth",
            title4: "Hobbies",
            title5: "Languages",
            name: "Sivani",
            fullName:
              "<nobr>Sivani</nobr> <nobr>Sutha</nobr> <nobr>Saravanan</nobr>",
            city: "Chennai, <nobr>TamilNadu</nobr>, <nobr>India</nobr>",
            dob: "22/05/1998",
            hobbies:
              "<nobr>Numismatics</nobr>, <nobr>Illustration</nobr>, <nobr>Badminton</nobr>",
            languages:
              "<nobr>English(C2)</nobr>, <nobr>Tamil(C2)</nobr>, <nobr>Telugu(spoken)</nobr>, <nobr>German(A1)</nobr>",
          },
          skill: {
            mainTitle: "Skills",
            subTitle: "Technical",
            skill1: "HTML",
            skill2: "CSS",
            skill3: "JavaScript",
            skill4: "ReactJS",
            skill5: "Redux",
            skill6: "Bootstrap",
            skill7: "Jquery",
            skill8: "MaterialUI",
            skill9: "ExpressJS",
            skill10: "NodeJS",
            skill11: "MongoDB",
            skill12: "Amazon Web Services",
            skill13: "Adobe Experience Manager (Content Management System)",
            skill14: "Actifio (Enterprise Cloud Data Management)",
            skill15: "Networking (Cisco)",
            skill16: "Backup & Restore",
            skill17: "Adobe Illustrator",
          },
          work: {
            mainTitle: "Experience",
            subTitle: "All Of My Works",
            tab1: "all",
            tab2: "professional",
            tab3: "training",
            tab4: "internship",
            disclaimer: "*click on each tile to learn more",
            brillio: {
              designation: "Senior Engineer",
              name: "Brillio Technologies",
              popup: {
                date: "March 2022 to till date",
                title: "Senior Engineer (Frontend)",
                text1: "Projects",
                text2: "include",
                text3: "and various other sites of",
                project: "Sun Pharma",
                tech: {
                  title: "Tech Stack",
                  skills:
                    "React JS, CSS, SCSS, Jquery, Javascript, Bootstrap, AEM",
                },
                responsibility: {
                  title: "Responsibilities",
                  res1: "Efficiently analyze, estimate, and develop responsive front-end components using scripting languages.",
                  res2: "Developing components with multimedia, animations, maps, and other functionalities as per design requirements.",
                  res3: "Implement front-end changes to enhance analytics and SEO performance.",
                  res4: "Serve as the primary point of contact for issues, requests, and discussions.",
                  res5: "Manage front-end issues, DevOps tasks, builds, deployments, and quality checks as required.",
                },
              },
            },
            tcs: {
              designation: "Engineer",
              name: "Tata Consultancy Services",
              popup: {
                date: "August 2019 to March 2022",
                title: "Engineer (Frontend and Networking)",
                text1: "Being part of",
                text2: "Alliance and Technology Unit",
                text3:
                  "works included development of several internal websites, networking, Configuring, deployment of Cisco devices, dffferent cloud and server environments",
                project: "",
                tech: {
                  title: "Tech Stack",
                  skills: "HTML, CSS, Javascript, AWS, Actifio, Opsview, Cisco",
                },
                responsibility: {
                  title: "Responsibilities",
                  res1: "Worked on frontend for multiple sites within the Unit.",
                  res2: "Achieved five Actifio certifications in backup and restore technologies",
                  res3: "Deployed Actifio on VMs and cloud platforms like AWS, configuring multi-platform backups.",
                  res4: "Monitored backups, prepared daily reports, and performed troubleshooting tasks.",
                  res5: "Deployed Opsview on Linux VMs, configuring service checks for diverse platforms and databases.",
                  res6: "Set up event handlers to automate service restarts during downtime.",
                  res7: "Completed foundational training in Networking, Switching, and Routing.",
                },
              },
            },
            guvi: {
              designation: `Full Stack <br className="d-block d-lg-none" /> Developer <br /> (Trainee)`,
              name: "Guvi Geeks",
              popup: {
                date: "September 2021 to March 2022",
                title: "Full Stack Developer | Student Trainee",
                tech: {
                  title: "Tech Stack",
                  skills:
                    "HTML, CSS, Javascript, ReactJS, NodeJS, MongoDB, ExpressJS",
                },
                responsibility: {
                  title: "Responsibilities",
                  res1: "Trained on Project based Full Stack Development Program in MERN",
                  res2: "Deeper understanding of Client Side Programming by developing highly responsive web pages",
                  res3: "Designing back end development by building multi-user web applications using NodeJS framework and MongoDb",
                  res4: "Knowledge on developer tools such as Git and deploying web applications onto web servers.",
                },
              },
            },
            infy: {
              designation: "Intern",
              name: "Infosys",
              popup: {
                date: "January 2019 to May 2019",
                title: "Intern (Developer)",
                tech: {
                  title: "Tech Stack",
                  skills: "HTML, CSS, Anugular JS, Bootstrap, MySQL",
                },
                responsibility: {
                  title: "Responsibilities",
                  res1: "Training and assessments on multiple technologies.",
                  res2: "Developed projects to integrate multi login system to handle data on multiple paltforms",
                },
              },
            },
          },
          cv:{
            btnText:"Download CV"
          }
        },
      },
      de: {
        translation: {
          header: {
            item1: "Heim",
            item2: "Um",
            item3: "Fähigkeiten",
            item4: "Arbeiten",
            item5: "Lebenslauf",
          },
          banner: {
            title: "Ich bin ein React-Webentwickler",
            text: "Ich bin auf die Erstellung dynamischer und reaktionsfähiger Benutzeroberflächen spezialisiert und habe dabei ein ausgeprägtes Auge für Design und Leistung.",
            btnText: "Über mich",
          },
          about: {
            mainTitle: "Über mich",
            subTitle: "Erfahren Sie mehr über mich",
            text1: "Ich bin",
            text2:
              "Hochmotivierter React JS-Entwickler mit Interesse am Erstellen und Optimieren von Webanwendungen, mit starkem Fokus auf der Erstellung effizienter, wiederverwendbarer Komponenten und der Verbesserung des Benutzererlebnisses.",
            text3:
              " Erfahren in der Zusammenarbeit in agilen Teams, der Integration von RESTful-APIs und dem Einsatz von Best Practices zur Leistungsoptimierung. Leidenschaft für die Nutzung modernster Technologien zur Lösung komplexer Probleme und Bereitstellung hochwertiger Lösungen.",
            title1: "Name",
            title2: "Aus",
            title3: "Geburtsdatum",
            title4: "Hobbys",
            title5: "Sprachen",
            name: "Sivani",
            fullName: "Sivani Sutha Saravanan",
            city: "Chennai, Tamil Nadu, <nobr>Indien</nobr>",
            dob: "22.05.1998",
            hobbies:
              "<nobr>Numismatik</nobr>, <nobr>Illustration</nobr>, <nobr>Faderball</nobr>",
            languages:
              "<nobr>Englisch (C2)</nobr>, <nobr>Tamil (C2)</nobr>, <nobr>Telugu (gesprochen)</nobr>, <nobr>Deutsch (A1)</nobr>",
          },
          skill: {
            subTitle: "Technisch",
            mainTitle: "Fähigkeiten",
            skill1: "HTML",
            skill2: "CSS",
            skill3: "JavaScript",
            skill4: "ReactJS",
            skill5: "Redux",
            skill6: "Bootstrap",
            skill7: "JQuery - Die Abfrage",
            skill8: "MaterialUI",
            skill9: "ExpressJS",
            skill10: "NodeJS",
            skill11: "MongoDB",
            skill12: "Amazon Web Services",
            skill13: "Adobe Experience Manager (Content-Management-System)",
            skill14: "Actifio (Unternehmens-Cloud-Datenmanagement)",
            skill15: "Netzwerk (Cisco)",
            skill16: "Sichern und Wiederherstellen",
            skill17: "Adobe Illustrator",
          },
          work: {
            mainTitle: "Erfahrung",
            subTitle: "Alle meine Werke",
            tab1: "alle",
            tab2: "Professional",
            tab3: "Ausbildung",
            tab4: "Praktikum",
            disclaimer: "*Klicken Sie auf jede Kachel, um mehr zu erfahren",
            brillio: {
              designation: "Leitender Ingenieur",
              name: "Brillio Technologies",
              popup: {
                date: "März 2022 bis heute",
                title: "Leitender Ingenieur (Frontend)",
                text1: "Projekte",
                text2: "enthalten",
                text3: "und verschiedene andere Websites von",
                project: "Sun Pharma",
                tech: {
                  title: "Tech-Stack:",
                  skills:
                    "React JS, CSS, SCSS, Jquery, Javascript, Bootstrap, AEM",
                },
                responsibility: {
                  title: "Verantwortlichkeiten",
                  res1: "Analysieren, bewerten und entwickeln Sie responsive Frontend-Komponenten effizient mithilfe von Skriptsprachen.",
                  res2: "Entwickeln von Komponenten mit Multimedia, Animationen, Karten und anderen Funktionen gemäß den Designanforderungen.",
                  res3: "Implementieren Sie Front-End-Änderungen, um die Analyse- und SEO-Leistung zu verbessern.",
                  res4: "Dient als primärer Ansprechpartner für Probleme, Anfragen und Diskussionen.",
                  res5: "Verwalten Sie nach Bedarf Front-End-Probleme, DevOps-Aufgaben, Builds, Bereitstellungen und Qualitätsprüfungen.",
                },
              },
            },
            tcs: {
              designation: "Ingenieur",
              name: "Tata Consultancy Services",
              popup: {
                date: "August 2019 bis März 2022",
                title: "Ingenieur (Frontend und Netzwerk)",
                text1: "Teil davon sein",
                text2: "Allianz- und Technologieeinheit",
                text3:
                  "Zu den Aufgaben gehörten die Entwicklung mehrerer interner Websites, die Netzwerkgestaltung sowie die Konfiguration und Bereitstellung von Cisco-Geräten und verschiedenen Cloud- und Serverumgebungen.",
                project: "",
                tech: {
                  title: "Tech-Stack:",
                  skills: "HTML, CSS, Javascript, AWS, Actifio, Opsview, Cisco",
                },
                responsibility: {
                  title: "Verantwortlichkeiten",
                  res1: "Arbeitete am Frontend für mehrere Sites innerhalb der Einheit.",
                  res2: "Fünf Actifio-Zertifizierungen in Backup- und Wiederherstellungstechnologien erhalten",
                  res3: "Actifio auf VMs und Cloud-Plattformen wie AWS bereitgestellt und plattformübergreifende Backups konfiguriert.",
                  res4: "Überwachte Backups, erstellte tägliche Berichte und führte Fehlerbehebungsaufgaben durch",
                  res5: "Opsview auf Linux-VMs bereitgestellt, Serviceprüfungen für verschiedene Plattformen und Datenbanken konfiguriert.",
                  res6: "Richten Sie Ereignishandler ein, um den Neustart des Dienstes während Ausfallzeiten zu automatisieren.",
                  res7: "Abgeschlossene Grundausbildung in den Bereichen Networking, Switching und Routing.",
                },
              },
            },
            guvi: {
              designation: `Full Stack <br className="d-block d-lg-none" /> Entwickler <br /> (Trainee)`,
              name: "Guvi Geeks",
              popup: {
                date: "September 2021 bis März 2022",
                title: "Full Stack Entwickler | Werkstudent",
                tech: {
                  title: "Tech-Stack",
                  skills:
                    "HTML, CSS, Javascript, ReactJS, NodeJS, MongoDB, ExpressJS",
                },
                responsibility: {
                  title: "Verantwortlichkeiten",
                  res1: "Schulung im projektbasierten Full-Stack-Entwicklungsprogramm bei MERN",
                  res2: "Tieferes Verständnis der Client-Side-Programmierung durch die Entwicklung hochresponsiver Webseiten",
                  res3: "Entwerfen der Back-End-Entwicklung durch Erstellen von Mehrbenutzer-Webanwendungen mit dem NodeJS-Framework und MongoDb",
                  res4: "Kenntnisse über Entwicklertools wie Git und die Bereitstellung von Webanwendungen auf Webservern.",
                },
              },
            },
            infy: {
              designation: "Praktikantin",
              name: "Infosys",
              popup: {
                date: "Januar 2019 bis Mai 2019",
                title: "Praktikant (Entwickler)",
                tech: {
                  title: "Tech-Stack",
                  skills: "HTML, CSS, Anugular JS, Bootstrap, MySQL",
                },
                responsibility: {
                  title: "Verantwortlichkeiten",
                  res1: "Schulungen und Bewertungen zu mehreren Technologien.",
                  res2: "Entwickelte Projekte zur Integration eines Multi-Login-Systems zur Verarbeitung von Daten auf mehreren Plattformen",
                },
              },
            },
          },
          cv:{
            btnText:"Lebenslauf herunterladen"
          }
        },
      },
    },
  });

export default i18n;
