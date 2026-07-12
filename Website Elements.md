**Global Website Elements**

These appear across almost every page.

  -----------------------------------------------------------------------------
  **Reference**   **Element**     **What it contains**
  --------------- --------------- ---------------------------------------------
  G1              Header          AAM monogram, name, tagline and main
                                  navigation

  G2              Main Navigation About, REVA, Projects, Data Visualisation,
                                  Robotics, Teaching, Blog and Contact

  G3              Theme Switcher  Light and dark mode button

  G4              Footer -- Brand Name, positioning statement and copyright

  G5              Footer --       Projects, Data Visualisation, Blog and
                  Explore         Professional Updates

  G6              Footer --       Email, LinkedIn, GitHub and WhatsApp
                  Connect         

  G7              Footer --       Content Studio, résumé download and Privacy
                  Maintain        

  G8              SEO and Social  Page titles, descriptions, canonical URLs,
                  Preview         structured data and sharing images
  -----------------------------------------------------------------------------

------------------------------------------------------------------------

**Page 1 --- Home**

**URL:** /\
**File:** src/pages/index.astro

This is the first page visitors see.

  -----------------------------------------------------------------------------
  **Section**   **Current content**
  ------------- ---------------------------------------------------------------
  Home 1        **Hero section** --- main photograph, location, headline and
                professional positioning

  Home 2        **Hero actions** --- Explore Selected Work, Start a
                Conversation and Download Résumé

  Home 3        **Current Work note** --- Assistant Professor at REVA
                University

  Home 4        **Impact Metrics** --- 10+ years, 40+ programmes, 500+ assets
                and 50+ educators

  Home 5        **Current Focus** --- Design Engineering as an operating system
                for learning

  Home 6        **Four Connected Areas of Practice** --- Academic Programme
                Strategy, EdTech and Faculty Development, Robotics and
                Innovation, Data Visualisation

  Home 7        **Selected Projects** --- six featured project cards

  Home 8        **Data Visualisation Preview** --- Candy Sales case study and
                dashboard illustration

  Home 9        **Latest Articles** --- three latest blog posts

  Home 10       **Professional Updates** --- three recent updates or LinkedIn
                references

  Home 11       **Final Collaboration CTA** --- roles, consulting, curriculum,
                robotics and data engagements
  -----------------------------------------------------------------------------

------------------------------------------------------------------------

**Page 2 --- About**

**URL:** /about/\
**File:** src/pages/about.astro

This page explains your full professional identity and career
progression.

  -----------------------------------------------------------------------------
  **Section**   **Current content**
  ------------- ---------------------------------------------------------------
  About 1       **Page Hero** --- educator-engineer positioning

  About 2       **Professional Narrative** --- connecting academic intent with
                deliverable systems

  About 3       **Areas of Practice** --- Academic Architecture, EdTech
                Operations, Robotics, Data, Faculty Development and Software

  About 4       **Professional Timeline** --- full employment history

  About 5       **Academic Preparation** --- PhD, MA, MTech and BE

  About 6       **Professional Associations** --- IEEE, CSTA, IAENG, IEDRC and
                ICSES

  About 7       **Certifications and Ongoing Learning**

  About 8       **Résumé Download and Contact CTA**, depending on final layout
  -----------------------------------------------------------------------------

------------------------------------------------------------------------

**Page 3 --- REVA University**

**Navigation label:** REVA\
**URL:** /reva/\
**File:** src/pages/reva.astro

This page presents your current role through responsibilities, systems
and programme contributions without repeatedly describing it as
leadership.

  ----------------------------------------------------------------------------
  **Section**   **Current content**
  ------------- --------------------------------------------------------------
  REVA 1        **Page Hero** --- Building the academic systems behind Design
                Engineering

  REVA 2        **From Programme Intent to Classroom Execution**

  REVA 3        **Three Operating Priorities**

  REVA 3A       Curriculum Development

  REVA 3B       Teacher Training

  REVA 3C       Hands-on Assessment

  REVA 4        **Programme Elements Under Development**

  REVA 4A       Design Spark

  REVA 4B       Idea Lab

  REVA 4C       Project Display Room

  REVA 5        **Activity-Based Lesson Planning**

  REVA 6        **Evaluating the Design Process**

  REVA 7        **Academic and Faculty Coordination**

  REVA 8        **Contact or Collaboration CTA**
  ----------------------------------------------------------------------------

The page does not use the REVA logo or internal university documents.

------------------------------------------------------------------------

**Page 4 --- Projects**

**URL:** /projects/\
**File:** src/pages/projects/index.astro

This is the main portfolio listing page.

  ---------------------------------------------------------------------------
  **Section**   **Current content**
  ------------- -------------------------------------------------------------
  Projects 1    **Page Hero** --- Projects that connect strategy with
                implementation

  Projects 2    **Project Filters or Categories**

  Projects 3    **Project Card Grid**

  Projects 4    **Individual Project Links**

  Projects 5    **Portfolio CTA**
  ---------------------------------------------------------------------------

The project cards are generated from files inside:

src/content/projects/

Current project entries include:

1.  REVA Design Engineering programme development

2.  FIRST Global Challenge 2025

3.  World Robot Olympiad mentoring

4.  Amazon Future Engineer Makerspace operations

5.  Design Spark

6.  Phi-Grid academic operations

7.  Multidisciplinary curriculum development

8.  Programme dashboards

9.  ForestBot

10. FloraBot

11. Automated Traffic Management System

12. Wireless 3D Printer

------------------------------------------------------------------------

**Page 5 --- Individual Project Case Study**

**URL format:** /projects/project-name/\
**Template:** src/pages/projects/\[id\].astro

Every project receives a separate page automatically.

  -----------------------------------------------------------------------
  **Section**         **Current content**
  ------------------- ---------------------------------------------------
  Project Detail 1    Project title, period, category and summary

  Project Detail 2    Context or problem

  Project Detail 3    Your role and contribution

  Project Detail 4    Approach and actions

  Project Detail 5    Tools and technologies

  Project Detail 6    Outcomes or outputs

  Project Detail 7    Images or subsystem illustrations

  Project Detail 8    Related work and contact CTA
  -----------------------------------------------------------------------

The written content is edited in the relevant Markdown file, not
directly in \[id\].astro.

Example:

src/content/projects/first-global-challenge-2025.md

------------------------------------------------------------------------

**Page 6 --- Data Visualisation**

**URL:** /data-visualisation/\
**File:** src/pages/data-visualisation/index.astro

This is the main landing page for your analytics and dashboard
capabilities.

  -----------------------------------------------------------------------------
  **Section**   **Current content**
  ------------- ---------------------------------------------------------------
  Data 1        **Page Hero** --- Dashboards designed around decisions, not
                decoration

  Data 2        **Complete Analytical Process** --- preparation to
                interpretation

  Data 3        **Analytics Capabilities**

  Data 3A       Power BI

  Data 3B       Excel

  Data 3C       Python

  Data 3D       SQL

  Data 4        **Featured Candy Sales Case Study**

  Data 5        **Four Portfolio Tracks**

  Data 5A       HR Analytics

  Data 5B       Sales Analytics

  Data 5C       Marketing Analytics

  Data 5D       Academic Analytics

  Data 6        **Embedded Dashboard Gallery**

  Data 7        **Power BI and Dashboard Services CTA**
  -----------------------------------------------------------------------------

------------------------------------------------------------------------

**Page 7 --- Candy Sales Case Study**

**URL:** /data-visualisation/candy-sales/\
**File:** src/pages/data-visualisation/candy-sales.astro

This is the first detailed data visualisation case-study page.

  -----------------------------------------------------------------------
  **Section**     **Current content**
  --------------- -------------------------------------------------------
  Candy 1         Case-study title and overview

  Candy 2         Business question

  Candy 3         Six source datasets

  Candy 4         Data preparation decisions

  Candy 5         Shipping-date correction

  Candy 6         Data model and relationships

  Candy 7         DAX and performance measures

  Candy 8         Trend and operational analysis

  Candy 9         Executive Sales Overview page

  Candy 10        Product Margin and Profitability page

  Candy 11        Target and Geography page

  Candy 12        Power BI embed placeholder

  Candy 13        Related dashboard case studies CTA
  -----------------------------------------------------------------------

------------------------------------------------------------------------

**Page 8 --- Dashboard Roadmap**

**URL:** /data-visualisation/dashboard-roadmap/\
**File:** src/pages/data-visualisation/dashboard-roadmap.astro

This page contains the ten one-day dashboard ideas.

  -----------------------------------------------------------------------
  **Section**     **Current content**
  --------------- -------------------------------------------------------
  Roadmap 1       Page introduction

  Roadmap 2       Ten dashboard project cards

  Roadmap 3       Morning workflow

  Roadmap 4       Afternoon workflow

  Roadmap 5       Evening publishing workflow

  Roadmap 6       Recommended dashboard-building order
  -----------------------------------------------------------------------

------------------------------------------------------------------------

**Page 9 --- Robotics and Innovation**

**Navigation label:** Robotics\
**URL:** /robotics/\
**File:** src/pages/robotics.astro

  --------------------------------------------------------------------------
  **Section**   **Current content**
  ------------- ------------------------------------------------------------
  Robotics 1    **Page Hero** --- engineering mentorship from mechanism to
                match strategy

  Robotics 2    **FIRST Global Challenge 2025 --- Team India**

  Robotics 3    **Engineering Learning Process**

  Robotics 3A   Interpret

  Robotics 3B   Compare

  Robotics 3C   Build and Test

  Robotics 3D   Communicate

  Robotics 4    **Makerspace and Technical Confidence**

  Robotics 5    **Hardware--Software Integration**

  Robotics 5A   Embedded Platforms

  Robotics 5B   Robot Mechanisms

  Robotics 5C   Connected Systems

  Robotics 5D   Programming

  Robotics 5E   CAD and Fabrication

  Robotics 5F   Competition Systems

  Robotics 6    **Subsystem and Final Robot Gallery**

  Robotics 7    **Robotics Programme CTA**
  --------------------------------------------------------------------------

------------------------------------------------------------------------

**Page 10 --- Teaching and Curriculum**

**Navigation label:** Teaching\
**URL:** /teaching/\
**File:** src/pages/teaching.astro

  -----------------------------------------------------------------------
  **Section**   **Current content**
  ------------- ---------------------------------------------------------
  Teaching 1    **Page Hero**

  Teaching 2    **Teaching Philosophy** --- meaning, method and evidence

  Teaching 3    **Multidisciplinary Teaching Capability**

  Teaching 3A   Computing and Data

  Teaching 3B   Electronics and Embedded Systems

  Teaching 3C   Robotics and Making

  Teaching 3D   Management and Research

  Teaching 3E   Emerging Technologies

  Teaching 3F   Design Engineering

  Teaching 4    **Course Development Process**

  Teaching 4A   Define

  Teaching 4B   Sequence

  Teaching 4C   Develop

  Teaching 4D   Validate

  Teaching 5    **Faculty-Development Workshops**

  Teaching 6    **Programme Formats**

  Teaching 6A   90-minute Masterclass

  Teaching 6B   3-hour Nano Workshop

  Teaching 6C   6-hour Intensive

  Teaching 6D   Faculty Development Programme

  Teaching 6E   Course Development

  Teaching 6F   Programme Review

  Teaching 7    **Collaboration CTA**
  -----------------------------------------------------------------------

------------------------------------------------------------------------

**Page 11 --- Blog**

**URL:** /blog/\
**File:** src/pages/blog/index.astro

  -----------------------------------------------------------------------
  **Section**      **Current content**
  ---------------- ------------------------------------------------------
  Blog 1           **Page Hero**

  Blog 2           **Article Search and Filters**

  Blog 3           **Featured or Latest Articles**

  Blog 4           **Complete Article Grid**

  Blog 5           **Email Subscription Section**
  -----------------------------------------------------------------------

Blog content is stored inside:

src/content/blog/

------------------------------------------------------------------------

**Page 12 --- Individual Blog Article**

**URL format:** /blog/article-name/\
**Template:** src/pages/blog/\[id\].astro

  ------------------------------------------------------------------------
  **Section**   **Current content**
  ------------- ----------------------------------------------------------
  Article 1     Title, category, date and reading time

  Article 2     Cover image

  Article 3     Main article content

  Article 4     Downloadable resources, where available

  Article 5     Social sharing

  Article 6     Comments

  Article 7     Related articles or contact CTA
  ------------------------------------------------------------------------

------------------------------------------------------------------------

**Page 13 --- Professional Updates**

**URL:** /updates/\
**File:** src/pages/updates.astro

This page is not currently shown in the main navigation. It is linked
through the homepage and footer.

  -----------------------------------------------------------------------
  **Section**        **Current content**
  ------------------ ----------------------------------------------------
  Updates 1          **Page Hero**

  Updates 2          **Professional Update Cards**

  Updates 3          **LinkedIn Post References**

  Updates 4          **LinkedIn Mirroring Workflow**

  Updates 5          **Content Studio Link**
  -----------------------------------------------------------------------

Update content is stored in:

src/content/updates/

------------------------------------------------------------------------

**Page 14 --- Contact**

**URL:** /contact/\
**File:** src/pages/contact.astro

  -----------------------------------------------------------------------
  **Section**          **Current content**
  -------------------- --------------------------------------------------
  Contact 1            **Page Hero**

  Contact 2            **Ways to Connect**

  Contact 2A           Email

  Contact 2B           Phone

  Contact 2C           WhatsApp

  Contact 2D           LinkedIn

  Contact 2E           GitHub

  Contact 2F           Résumé download

  Contact 3            **Enquiry Form**

  Contact 4            **Meeting Request option**

  Contact 5            **Privacy and consent notice**
  -----------------------------------------------------------------------

------------------------------------------------------------------------

**Page 15 --- Contact Thank-You Page**

**URL:** /contact/thank-you/\
**File:** src/pages/contact/thank-you.astro

Visitors reach this page after submitting the contact form.

  -----------------------------------------------------------------------
  **Section**          **Current content**
  -------------------- --------------------------------------------------
  Thank You 1          Submission acknowledgement

  Thank You 2          Expected next step

  Thank You 3          Return-to-site links
  -----------------------------------------------------------------------

------------------------------------------------------------------------

**Page 16 --- Content Studio**

**URL:** /studio/\
**File:** src/pages/studio.astro

This is a maintenance page rather than a public portfolio page.

  -----------------------------------------------------------------------
  **Section**   **Current content**
  ------------- ---------------------------------------------------------
  Studio 1      Introduction and instructions

  Studio 2      Project entry generator

  Studio 3      Blog article generator

  Studio 4      Professional update generator

  Studio 5      File-download and upload instructions
  -----------------------------------------------------------------------

It creates Markdown files but does not publish them automatically.

------------------------------------------------------------------------

**Page 17 --- Privacy**

**URL:** /privacy/\
**File:** src/pages/privacy.astro

  -----------------------------------------------------------------------
  **Section**      **Current content**
  ---------------- ------------------------------------------------------
  Privacy 1        Contact and subscription forms

  Privacy 2        Analytics

  Privacy 3        Comments

  Privacy 4        External links

  Privacy 5        Portfolio information

  Privacy 6        Contact details
  -----------------------------------------------------------------------

------------------------------------------------------------------------

**Page 18 --- 404 Error Page**

**URL:** automatically shown for invalid links\
**File:** src/pages/404.astro

  -----------------------------------------------------------------------
  **Section**     **Current content**
  --------------- -------------------------------------------------------
  404 1           Page-not-found message

  404 2           Navigation back to the website
  -----------------------------------------------------------------------
