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
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the ID'
        },
        {
            emoji: "💼",
            text: "Aspiring Data Analyst & Data Scientist"
        },
        {
            emoji: "📧",
            text: "awsyahnanda@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Syah. I'm an aspiring Data Analyst and Scientist. I studied Engineering at EEPIS and Mastered Data Science at Purwadhika Digital Technology School, I enjoy coffee talks, and I believe data will inevitably bring us all in perfection. You should hire me!",
    skills:
    {
        proficientWith: ['Python', 'Tableau', 'SQL', 'PowerBI', 'Scikit-Learn', 'G-Suites', 'Google Analytics', 'Looker Studio','GitHub'],
        exposedTo: ['R', 'reactjs', 'NLP', 'Product Management']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            type : "component",
            title: "Analysis and Classification Predictive Modeling",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            // component: <Mock1/>
            component: <Mock1 />
        },
        {
            type : "component",
            title: "Analysis and Regression Predictive Modeling",
            live: "",
            source: "",
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
            source: "",
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
                            src="https://www.canva.com/design/DAGDIF-nyl0/oik8NZdGVBM0GgyzdWv3zw/view?embed" 
                            allowfullscreen="allowfullscreen" 
                            allow="fullscreen">
                        </iframe>
                </div>
            </>

        },
        {
            type : "img",
            title: "SQL Projects",
            live: "",
            source: "",
            component: "/assets/img/mock2.png"
        },
        {
            type : "component",
            title: "R Projects",
            live: "",
            source: "",
            component: <Mock1 />
        },
        {
            type : "component",
            title: "Property Analysis in Melbourne City using Tableau",
            live: "",
            source: "",
            component: <Mock1 />
        }
    ]
}
// {/* <div class='tableauPlaceholder' 
// id='viz1723200376485' 
// style='position: relative'>
//     <noscript>
//         <a href='#'>
//             <img alt='Main Dashboard ' src='https://public.tableau.com/static/images/E-/E-CommerceDashboardBetaGroup/MainDashboard/1_rss.png' style='border: none' />
//             </a></noscript>
//             <object class='tableauViz'  style='display:none;'>
//                 <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
//                 <param name='embed_code_version' value='3' />
//                 <param name='site_root' value='' />
//                 <param name='name' value='E-CommerceDashboardBetaGroup/MainDashboard' />
//                 <param name='tabs' value='no' />
//                 <param name='toolbar' value='yes' />
//                 <param name='static_image' value='https://public.tableau.com/static/images/E-/E-CommerceDashboardBetaGroup/MainDashboard/1.png' /> 
//                 <param name='animate_transition' value='yes' />
//                 <param name='display_static_image' value='yes' />
//                 <param name='display_spinner' value='yes' />
//                 <param name='display_overlay' value='yes' />
//                 <param name='display_count' value='yes' />
//                 <param name='language' value='en-US' />
//             </object>
//             </div>                
//             <script type='text/javascript'>
//             var divElement = document.getElementById('viz1723200376485');
//             var vizElement = divElement.getElementsByTagName('object')[0];
//             if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1920px';vizElement.style.height='1107px';} 
//             else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1920px';vizElement.style.height='1107px';} 
//             else { vizElement.style.width='100%';vizElement.style.height='3827px';}                     
//             var scriptElement = document.createElement('script');                    
//             scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
// </script> */}