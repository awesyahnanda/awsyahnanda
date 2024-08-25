import Mock1 from './embed/churnproject'

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(115, 115, 115)", "rgb(31, 146, 234)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Alif",
    lastName: "Syahnanda",
    initials: "aws", // the example uses first and last, but feel free to use three or more if you like.
    position: "an Aspiring Data Enthusiast",
    selfPortrait: "/assets/img/self.png", // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[1],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Powered by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in the Jakarta, Indonesia'
        },
        {
            emoji: "💼",
            text: "Aspiring Analyst - Data Scientist"
        },
        {
            emoji: "📧",
            text: "alifsyahnanda@outlook.com"
        },
        {
            emoji: "📝",
            text: "Data Enthusiast with Engineering Background"
        }
    ],
    socials: [
               {
            link: "https://instagram.com/syahnandaa",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/awesyahnanda",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/alifsyahnanda/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
         {
            link: "mailto:alifsyahnanda@outlook.com",
            icon: 'fa fa-envelope',
            label: 'email'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: `Hello there! I'm Syah. an aspiring Data Analyst and Scientist from Jakarta,Indonesia. Specializing in Python, SQL, Tableau and other analytical tools. I was working professionally in sustainability and engineering field for about almost 3 years, and turn out realigning my career path to actively mastering data science and analytics at Purwadhika Digital Technology School. I couldn't be happier to drive transformational solutions by data-driven across various industries. <br /><br /> I'm currently developing on learning data analytics, science and Machine Learning Models. Once I feel I've become fairly proficient in my preferred stack, I plan to expand my horizons to NLP, Gerative-AI, and eventually I'll probably end up giving into the Data & Product Craze. I enjoy coffee talks, and I believe data will inevitably bring us all in perfection.`,
    skills:
    {
        proficientWith: ['Python', 'Tableau', 'SQL', 'PowerBI', 'Scikit-Learn', 'G-Suites', 'Google Analytics','Microsoft Office', 'Looker Studio','GitHub','Visio','VS Code'],
        exposedTo: ['R', 'reactjs', 'NLP', 'Product Management','Jira','Minitab','Draw.io']
    }
    ,
    hobbies: [
        {
            label: 'brewing',
            emoji: '☕'
        },
        {
            label: 'duathlon',
            emoji: '🚴‍♂️🏃‍♂️'
        },
        {
            label: 'photography-videography',
            emoji: '📸🎬'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'reading',
            emoji: '📖'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            type : "component",
            title: "Analysis and Classification Predictive Modeling for Customer Churn",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/awesyahnanda/ECommerceChurn-Analysis-PredictiveModel", // this should be a link to the **repository** of the project, where the code is hosted.
            component: <Mock1 />
        },
        {
            type : "component",
            title: "Analysis and Regression Predictive Modeling for Used Car Price",
            live: "",
            source: "https://github.com/awesyahnanda/UsedCarPrice-Analysis-PredictiveModel",
            component: 
            <>
                <div  style={{
                            position: "relative",
                            width: "95%",
                            height: 0,
                            paddingTop: "40%",
                            paddingBottom: 0,
                            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                            marginTop: "1.6em",
                            marginBottom: "0.9em",
                            overflow: "hidden",
                            borderRadius: 8,
                            willChange: "transform"
                        }}
                    >
                        <iframe 
                            loading="lazy"
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                border: "none",
                                padding: 0,
                                margin: 0
                            }}
                            src="https://www.canva.com/design/DAGGgQzJZYk/qkYq3rQ3UxRGRji71el_KA/view?embed" 
                            allowfullscreen="allowfullscreen" 
                            allow="fullscreen">
                        </iframe>
                </div>
            </>
        },
        {
            type : "component",
            title: "Supermarket Customer Analysis using RFM Method",
            live: "",
            source: "https://github.com/awesyahnanda/SupermarketCustomers-RFM-Analysis",
            component: 
            <>
                <div  style={{
                            position: "relative",
                            width: "95%",
                            height: 0,
                            paddingTop: "40%",
                            paddingBottom: 0,
                            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                            marginTop: "1.6em",
                            marginBottom: "0.9em",
                            overflow: "hidden",
                            borderRadius: 8,
                            willChange: "transform"
                        }}
                    >
                        <iframe 
                            loading="fast"
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                border: "none",
                                padding: 0,
                                margin: 0
                            }}
                            src="https://www.canva.com/design/DAGDIF-nyl0/oik8NZdGVBM0GgyzdWv3zw/view?embed" 
                            allowfullscreen="allowfullscreen" 
                            allow="fullscreen">
                        </iframe>
                </div>
            </>

        },
        {
            type : "component",
            title: "Clustering of countries in crisis for international HELP using KMEANS Unsupervised Learning",
            live: "",
            source: "https://github.com/awesyahnanda/Clustering-Countries-KMEANS",
            component: <>
            <div  style={{
                        position: "relative",
                        width: "95%",
                        height: 0,
                        paddingTop: "40%",
                        paddingBottom: 0,
                        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                        marginTop: "1.6em",
                        marginBottom: "0.9em",
                        overflow: "hidden",
                        borderRadius: 8,
                        willChange: "transform"
                    }}
                >
                    <iframe 
                        loading="fast"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            border: "none",
                            padding: 0,
                            margin: 0
                        }}
                        src="https://www.canva.com/design/DAF5LbF1ad0/mtMsp1MYtWyIpt9Tf4zi1A/view?embed" 
                        allowfullscreen="allowfullscreen" 
                        allow="fullscreen">
                    </iframe>
            </div>
        </>
        },
        {
            type : "component",
            title: "Product Development for GGL to Expanding Production and Dairy Products Beyond Fresh Milk",
            live: "",
            source: "https://drive.google.com/file/d/1YSHJ-EaqQvOWWSkJYGgXQDhljPC4tg3Z/view?usp=sharing",
            component: <>
            <div  style={{
                        position: "relative",
                        width: "95%",
                        height: 0,
                        paddingTop: "40%",
                        paddingBottom: 0,
                        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                        marginTop: "1.6em",
                        marginBottom: "0.9em",
                        overflow: "hidden",
                        borderRadius: 8,
                        willChange: "transform"
                    }}
                >
                    <iframe 
                        loading="fast"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            border: "none",
                            padding: 0,
                            margin: 0
                        }}
                        src="https://www.canva.com/design/DAFmkOIlyF4/x_bBNZp8xAZYiIQ-84zQDA/view?embed" 
                        allowfullscreen="allowfullscreen" 
                        allow="fullscreen">
                    </iframe>
            </div>
        </>
        }
        ,
        {
            type : "img",
            title: "Simple HR-Dashboard",
            live: "",
            source: "",
            component: "/assets/img/simplehrtableau.png"
        },
        {
            type : "img",
            title: "Property Analysis in Melbourne City using Tableau",
            live: "",
            source: "https://public.tableau.com/views/MelbournePropertyPrice/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            component: "/assets/img/tableaustory.png"
        },
        {
            type : "img",
            title: "E-Commerce Customer Churn Analysis Dashboard",
            live: "",
            source: "https://public.tableau.com/views/E-CommerceDashboardBetaGroup/MainDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            component: "/assets/img/churndashboard.png"
        },
        {
            type : "img",
            title: "Supermarket Customer Behaviour Analysis Dashboard",
            live: "",
            source: "https://public.tableau.com/views/SupermarketCustomersDashboard/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            component: "/assets/img/superdashboard.png"
        },
        {
            type : "img",
            title: "CRUD Apps for Hospital Patients Service",
            live: "",
            source: "https://github.com/awesyahnanda/CRUD-Python-Project",
            component: "/assets/img/03.jpg"
        }
    ]
}