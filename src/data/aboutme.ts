export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Mousuf Nayon",
  title: "Software Developer",
  institution: "London, UK",
  // Note that links work in the description
  description: `
    <p>
      <strong>Adventure seeker, Software Developer,</strong> and a man passionate about science, maths, art, and literature. My current passion project focuses on material science simulation software and the study of Automata Theory and Formal Language Theory.<br><br>
    </p>
    <p>
      I frequently post <a href="https://substack.com/@mousufnayon" target="_blank" rel="noopener noreferrer">analyse articles</a> of academic papers, industry articles and reports. However, one thing you won’t see me post about but I thoroughly enjoy is the political analysis of speeches and books. <br><br>
    </p>
    <ul>
      <li><strong>Currently Reading:</strong> <em>Dune</em> and the analysis of the characters' political influence on the storyline.</li>
      <li><strong>Speech Analysis:</strong> Alexander the Great & The Opis Mutiny. Linguistic analysis and the historical impact of the speech. </li>
    </ul>
  `,
  email: "mousuf.nayon@gmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "mousufcz",
  linkedinUsername: "mousuf",
  //twitterUsername: "janesmith",
  blogUrl: "https://substack.com/@mousufnayon",
  cvUrl: "https://drive.google.com/file/d/1fkeezDd3glpEr2Vyt5mQdJhXMCkPov6r/view?usp=sharing",
  institutionUrl: "https://www.citystgeorges.ac.uk",
  // altName: "",
  // secretDescription: "I like dogs.",
};
