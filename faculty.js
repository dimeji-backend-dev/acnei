const facultyData = [
    {
        id: 1,
        name: "Dr. Thomas Amatey Tagoe",
        role: "Neuroscientist & Science Communicator",
        institution: "University of Ghana / Accra College of Medicine",
        expertise: ["Experience-Dependent Plasticity", "Environmental Enrichment", "Depression", "Electrophysiology", "Science Communication", "Neurophysiology", "Mental Health"],
        bio: "Dr. Thomas Amatey Tagoe is a neuroscientist, science communicator, and co‑founder of G.H.Scientific, an organization focused on building capacity in the sciences through public engagement. He holds dual faculty positions at the University of Ghana and Accra College of Medicine, with over a decade of interdisciplinary research spanning neurophysiology, mental health, and science communication. He heads the Enrichment Lab, which investigates mechanisms of experience‑dependent plasticity using environmental enrichment as a model for depression. He has secured multiple grants, including being among the first cohort of the Neuroscience Capacity Accelerator for Mental Health Program, and established the only electrophysiology lab in Ghana. His work has been featured on BBC, CNN, and The Conversation, and he actively advocates for capacity building through workshops and public engagement initiatives.",
        publications: [], // multiple publications in peer-reviewed journals; add specific ones if known
        achievements: [
            "Neuroscience Capacity Accelerator for Mental Health Program Awardee (inaugural cohort)",
            "Multiple small grants to establish electrophysiology lab in Ghana",
            "Media features: BBC, CNN, The Conversation"
        ],
        social: { linkedin: "#", twitter: "#", website: "#" },
        image: "./images/faculty/thomas.jpeg"
    },
    {
        id: 2,
        name: "Dr. Omamuyovwi Meashack Ijomone",
        role: "Associate Professor of Anatomy and Neuroscience",
        institution: "University of Medical Sciences, Ondo, Nigeria",
        expertise: ["Neurotoxicology", "C. elegans Models", "Synaptic Complexes", "Behavioural Phenotyping", "Brain Disorders (Autism)"],
        bio: "Dr. Omamuyovwi Meashack Ijomone (Mamus Ijomone) is an Associate Professor at the University of Medical Sciences, Ondo, Nigeria, where he leads the Laboratory for Experimental and Translational Neurobiology and serves as Deputy Director of the Central Office for Research and Development. He is also a Visiting Assistant Professor at the Albert Einstein College of Medicine, New York, USA. His research focuses on how genetic and environmental factors affect brain cells during development and across the lifespan, using C. elegans and rat models to study synaptic complexes, socio‑sensory, cognitive, and mechanosensory phenotypes relevant to brain disorders such as autism. He obtained his BSc from the University of Port Harcourt, and his MSc and PhD from Obafemi Awolowo University, followed by a postdoctoral fellowship at Einstein (2017–2018).",
        publications: [],
        achievements: [
            "IBRO-ISN Research Fellowship (2017)",
            "IBRO Return Home Fellowship (2018)",
            "ISN-CAEN 1B Grants (2019, 2021)",
            "Young IBRO Award (2019)",
            "Av‑Humboldt Georg Foster Experienced Researchers Fellowship (2021)",
            "IBRO Early Career Award (2021)",
            "ISN Career Development Grant (2023)",
            "Royal Society Colin Blakemore Bursary Award (2023)",
            "NIH K43 Grant (2022–2027)"
        ],
        social: { linkedin: "#", twitter: "#", website: "#" },
        image: "./images/faculty/ijomone.jpg"
    },
    {
        id: 3,
        name: "William Dorrell",
        role: "Theoretical Neuroscientist",
        institution: "Kemper Institute, Harvard",
        expertise: ["Normative Theories", "Neural Coding", "Optimal Computation", "Neural Activity Analysis"],
        bio: "William Dorrell is a Theoretical Neuroscientist interested in the neural underpinnings of cognition. He completed his PhD at the Gatsby Unit in London, supervised by Peter Latham, Tim Behrens, and James Whittington, where he developed normative theories of optimal computation to interpret neural recordings. His research focuses on building normative theories that describe how computations should be reflected in neural firing rates or artificial neural network activities. These theories help explain puzzling features of neural behavior or use neural measurements as evidence for specific computations. Dorrell has applied these approaches to study prefrontal, entorhinal, and retinal representations. During his fellowship, he aims to understand how the brain supports reasoning, rhythmic tapping, and game-playing, working toward a cohesive mathematical framework for inferring computations in biological and artificial neurons.",
        publications: [],  // No specific publications listed in the bio
        achievements: ["Gatsby PhD Fellowship"], // inferred from context, you can remove if not confirmed
        social: { linkedin: "#", twitter: "#", website: "#" },
        image: "./images/faculty/william.jpg"
    },
    {
        id: 4,
        name: "Geraud Nangue Tasse",
        role: "Lecturer",
        institution: "University of the Witwatersrand",
        expertise: ["Reinforcement Learning", "General Intelligence", "Continual Learning", "Compositionality", "Robotics", "Neuroscience"],
        bio: "Geraud Nangue Tasse is a Lecturer at the University of the Witwatersrand (Wits), where he works in the RAIL and CAandL labs. He completed both his Ph.D. and M.Sc. at Wits under the supervision of Benjamin Rosman and Steven James, and earned his B.Sc. from Rhodes University, majoring in Computer Science, Pure and Applied Mathematics, and Physics and Electronics. His research focuses on understanding general intelligence—investigating how properties like sample efficiency, generalization, continual learning, language, reasoning, compositionality, safety, and interpretability can emerge from a single unified framework with minimal added priors. His primary interests lie in reinforcement learning and related fields, including robotics, neuroscience, and psychology.",
        publications: [], // add specific publications if available
        achievements: [], // add awards or fellowships if known
        social: { linkedin: "#", twitter: "#", website: "#" },
        image: "./images/faculty/geraud.PNG"
    },
    {
    id: 5,
    name: "Dr. Ibeachu Chinagorom",
    role: "Associate Professor of Anatomy",
    institution: "University of Port Harcourt",
    expertise: ["Computational Neuroscience", "Neuroanatomy", "Machine Learning", "Neuroimaging Analysis", "Neurodegenerative Diseases", "Alzheimer's Disease", "Early Detection", "Python"],
    bio: "Dr. Ibeachu Chinagorom is an Associate Professor of Anatomy at the University of Port Harcourt and a computational neuroscience researcher focused on integrating neuroanatomy with data‑driven approaches to understand brain function and neurological disorders. His work applies machine learning and neuroimaging analysis to study neurodegenerative diseases, particularly Alzheimer's disease, with an emphasis on early detection and disease progression. He is an alumnus of the Imbizo Computational Neuroscience School and the TReND in Africa CaMinA program, and part of the pioneer cohort of the Gatsby Computational Neuroscience Unit Bridging Mathematics Programme at University College London. He serves as a faculty member at the BioRTC Computational Neuroscience School and is actively involved in capacity building across Africa, training students in Python, machine learning, and large‑scale neural data analysis.",
    publications: [],
    achievements: [
        "Alumnus, Imbizo Computational Neuroscience School",
        "Alumnus, TReND in Africa CaMinA Program",
        "Pioneer Cohort, Gatsby Computational Neuroscience Unit Bridging Mathematics Programme (UCL)",
        "Faculty Member, BioRTC Computational Neuroscience School"
    ],
    social: { linkedin: "#", twitter: "#", website: "#" },
    image: "./images/faculty/ibeachu.png"
    },
    {
        id: 6,
        name: "Dr. Marcus Ghosh",
        role: "Imperial College Research Fellow",
        institution: "Imperial College London",
        expertise: ["Artificial Neural Networks", "Neural Circuits", "Multisensory Integration", "Machine Learning", "Animal Behavior", "Computational Neuroscience"],
        bio: "Dr. Marcus Ghosh is a Research Fellow at Imperial College London, affiliated with the Department of Life Sciences and the I-X Centre for AI in Science. His research uses artificial neural networks to model neural circuits, focusing on how the brain combines information across senses and how circuit structure shapes function. He completed his B.Sc., Ph.D., and medical degree (M.B.B.S.) at University College London, followed by postdoctoral fellowships at Sorbonne Université and Imperial College. During his Ph.D., he developed a machine‑learning toolkit to describe animal behavior at multiple timescales. He has received funding from Marie Skłodowska-Curie Actions, Schmidt Sciences, and Imperial College London.",
        publications: [],
        achievements: [
            "Marie Skłodowska-Curie Actions Fellowship",
            "Schmidt Sciences Funding",
            "Imperial College Research Fellowship"
        ],
        social: { 
            linkedin: "#", 
            twitter: "https://bsky.app/profile/marcusghosh.bsky.social", 
            website: "https://profiles.imperial.ac.uk/m.ghosh" 
        },
        image: "./images/faculty/marcus.JPG"
    },
    {
    id: 7,
    name: "Dr. Rubén Herzog",
    role: "Profesor Distinguido (Beatriz Galindo Fellow)",
    institution: "University of the Balearic Islands / IFISC",
    expertise: ["Whole-Brain Modelling", "Dynamical Systems", "Information Theory", "Neuroimaging", "Consciousness", "Sleep", "Neurodegeneration", "High-Order Interactions"],
    bio: "Dr. Rubén Herzog is a Chilean computational neuroscientist and Profesor Distinguido (Beatriz Galindo Fellow) at the Department of Psychology, University of the Balearic Islands (UIB, Spain), affiliated with the Institute for Cross-Disciplinary Physics and Complex Systems (IFISC). He holds a Bachelor and Masters in Biology and a PhD in Biophysics and Computational Biology. His research integrates multimodal neuroimaging with high-order interaction frameworks to study consciousness, sleep, neurodegeneration, and brain health. He develops scalable whole-brain models linking neural dynamics with cognition and disease, and advances accessible information‑theoretic approaches to characterize high‑order interdependencies in brain activity. He has held postdoctoral positions at BrainLat (Chile) and the Paris Brain Institute (France), and has authored 25+ publications with 800+ citations.",
    publications: [], // 25+ publications; add specific titles if known
    achievements: [
        "Beatriz Galindo Fellow (Profesor Distinguido)",
        "25+ publications with 800+ citations",
        "Postdoctoral Fellow, BrainLat (Chile)",
        "Postdoctoral Fellow, Paris Brain Institute (France)"
    ],
    social: { linkedin: "#", twitter: "#", website: "#" },
    image: "./images/faculty/ruben.jpg"
    },
    {
        id: 8,
        name: "Ayoade Adeyemi",
        role: "PhD Candidate in Computational Science and Engineering",
        institution: "Kadir Has University",
        expertise: ["Computational Neuroscience", "Haptics", "Virtual Reality", "Brain-Computer Interfaces", "Wearable Haptic Technologies", "Data-Driven Modeling", "Rehabilitation Systems"],
        bio: "Ayoade Adeyemi is a PhD candidate in Computational Science and Engineering at Kadir Has University, with a background in Biomedical Engineering. His research bridges computational neuroscience, haptics, and virtual reality, focusing on human‑centered systems for perception, interaction, and rehabilitation. He has contributed to projects on brain‑computer interfaces, wearable haptic technologies, and data‑driven modeling. Beyond research, he is passionate about mentorship and career development, guiding students into research and publication. His interests extend to translating computational neuroscience methods into real‑world healthcare and technology applications.",
        publications: [],
        achievements: [], // Add any awards or notable recognitions if available
        social: { linkedin: "#", twitter: "#", website: "#" },
        image: "./images/faculty/ayoade.jpg"
    },
    {
        id: 9,
        name: "Bethlehem (Betty) Bekele",
        role: "PhD Candidate",
        institution: "Emory University",
        expertise: ["Myotonic Dystrophy Type 1", "Toxic RNA", "Mouse Models", "Behavioral Neuroscience", "Serotonin Transporter", "Ion-Dependent Transport"],
        bio: "Betty Bekele is a PhD candidate in the Emory Neuroscience Graduate Program in the lab of Dr. Gary Bassell, where she is developing a novel mouse model to study the molecular and behavioral consequences of toxic RNA in the brain in myotonic dystrophy type 1 (DM1). She moved from Ethiopia to the United States in 2015 and earned her bachelor's degree in Neuroscience and Biology from Wesleyan University. She later trained at Yale School of Medicine in Dr. Gary Rudnick's lab, contributing to work on serotonin transporter pharmacology and ion-dependent transport mechanisms. Beyond research, Betty is deeply engaged in mentorship and leadership, having co-founded an organization for international graduate students at Emory and currently co-directing a mentorship initiative with Black in Neuro, an organization that empowers Black scholars in neuroscience fields.",
        publications: [],
        achievements: [
            "Myotonic Dystrophy Foundation Predoctoral Fellowship (2023)"
        ],
        social: { linkedin: "#", twitter: "#", website: "#" },
        image: "./images/faculty/bethlehem.jpg"
    },
    {
        id: 10,
        name: "Hamza Abdelhedi",
        role: "PhD Candidate in Biomedical Engineering",
        institution: "Université de Montréal / Mila – Quebec AI Institute",
        expertise: ["Decision-Making", "EEG/MEG", "Neural Complexity", "Computational Modeling", "AI for Neuroscience", "Neuroimaging Pipelines", "ADHD", "Epilepsy"],
        bio: "Hamza is a PhD student in Biomedical Engineering at the Université de Montréal, supervised by Dr. Karim Jerbi at the Cognitive and Computational Neuroscience Lab (CoCo Lab) and Mila – Quebec AI Institute. His research bridges neuroscience and AI, investigating neural correlates of decision-making, brain disorders, and modulation of brain states by psychoactive substances using EEG/MEG, neural complexity, and computational modeling. He develops large-scale neuroimaging pipelines and leverages AI to study ADHD and epilepsy, while exploring how brain complexity relates to cognitive traits and choice behavior. An advocate for open science, he builds shareable tools to lower research barriers and fosters equity in the scientific community. Originally from Tunisia, he completed pre-engineering studies in mathematics and physics, then earned an undergraduate degree in Telecommunication Engineering, followed by an MSc in AI from Mila. He is now based in Tiohtià:ke / Montréal.",
        publications: [],
        achievements: [
            "Mila – Quebec AI Institute Graduate Fellow"
        ],
        social: { linkedin: "#", twitter: "#", website: "#" },
        image: "./images/faculty/hamza.jpeg"
    },
    {
    id: 11,
    name: "Jessica Oparebea",
    role: "Biomedical Engineer",
    institution: "",
    expertise: ["Biomedical Engineering", "Computational Neuroscience", "Translational Neurotechnology", "Neurological Function Restoration"],
    bio: "Jessica Oparebea is a biomedical engineer with a strong interest in computational neuroscience and translational neurotechnology. She focuses on combining engineering and computational neuroscience to develop technologies that restore lost neurological function. She was featured by the Allen Institute for organizing a webinar promoting neuroscience education and collaboration.",
    publications: [],
    achievements: [
        "Featured by the Allen Institute for organizing a neuroscience education webinar"
    ],
    social: { linkedin: "#", twitter: "#", website: "#" },
    image: "./images/faculty/jessica.jpg"
    },
    {
        id: 12,
        name: "Chris Ki",
        role: "PhD Candidate",
        institution: "Carnegie Mellon University",
        expertise: ["Population-Level Neural Analyses", "Brain-Computer Interfaces", "Volitional Regulation", "Internal States", "Arousal", "Motivation", "Neural Computation"],
        bio: "Chris Andrew is a sixth-year PhD student in the Joint Neural Computation and Machine Learning program at Carnegie Mellon University, co-advised by Matthew Smith and Byron Yu. His research leverages population-level neural analyses to develop brain–computer interfaces that enable volitional regulation of internal states such as arousal and motivation.",
        publications: [],
        achievements: [],
        social: { linkedin: "#", twitter: "#", website: "#" },
        image: "./images/faculty/andrew.png"
    },
    {
        id: 13,
        name: "Adithya Narayan Chandrasekaran",
        role: "PhD Student",
        institution: "University of Pittsburgh",
        expertise: ["Sensory Processing", "Action Guidance", "Behavioral Experiments", "Multi-Area Neural Recordings", "Computational Modeling", "Brain Communication", "Flexible Behavior"],
        bio: "Adithya Narayan Chandrasekaran is a PhD student at the University of Pittsburgh, working with Matthew Smith (CMU), Aaron Batista (Pitt), and Steven Chase (CMU). His research combines behavioral experiments, multi-area neural recordings, and computational modeling to understand how the brain processes sensory information to guide action and how communication across brain regions enables flexible behavior.",
        publications: [],
        achievements: [],
        social: { linkedin: "#", twitter: "#", website: "#" },
        image: "./images/faculty/adithya.jpeg"
    },
    {
        id: 14,
        name: "AbdelQader AlKilany",
        role: "PhD Candidate",
        institution: "Imperial College London",
        expertise: ["Spiking Neural Networks", "Neuromodulation", "Biologically Inspired Modeling", "Hybrid ANN/SNN Models", "Robotics", "AI Systems"],
        bio: "AbdelQader AlKilany is a PhD candidate in the Electrical and Electronic Engineering Department at Imperial College London. His research focuses on spiking neural networks and neuromodulation, exploring biologically inspired approaches to modeling neural computation. He completed an MEng in Electronic and Information Engineering at Imperial, where he worked on hybrid Artificial/Spiking Neural Network models. Alongside his research, he has experience in robotics and AI systems and currently contributes to teaching in neuroscience, robotics, and machine learning at Imperial College London.",
        publications: [],
        achievements: [], // Add any awards or recognitions if known
        social: { linkedin: "#", twitter: "#", website: "#" },
        image: "./images/faculty/abdelqader.jpg"
    }
];

export default facultyData;
