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
      <strong>An adventure seeking Software Developer</strong> and a man passionate about science, maths, art, and literature. My current development project focuses on material science and mathematics behind 3D graphics software.<br><br>
    </p>

    <p>
      In addition to this, I consult with companies from Indonesia, the Philippines, the UAE and Uruguay to deepen trade relationships with the UK.<br><br>
    </p>

    <p>
      I regularly publish <a href="https://substack.com/@mousufnayon" target="_blank" rel="noopener noreferrer">analytical articles</a> based on academic papers, industry articles and reports. One subject I enjoy, but I rarely write about, is the political analysis of epic literature and noteworthy speeches. <br><br>
    </p>

    <ul>
      <li>
        <strong>Currently Reading:</strong> Dune and the analysis of the characters' political influence on the storyline. <br><br>
      </li>
      <li>
        <strong>Speech Analysis:</strong> <a href="https://www.youtube.com/watch?v=RlKJDwViNKs" target="_blank" rel="noopener noreferrer">Alexander the Great & The Opis Mutiny</a>. Linguistic analysis and the historical impact of the speech. <br><br>
      </li>
      <li>
        <strong>Art:</strong> Wife has commissioned a massive painting for the living room. <br><br>
      </li>
      <li>
        <strong>Sport:</strong> Getting strong at swimming, it's been great for this heatwave.
      </li>
    </ul>
  `, 
  email: "mousuf.nayon@gmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1624664853693-cf6419dee3bb?q=80&w=2559&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "mousufcz",
  linkedinUsername: "mousuf",
  //twitterUsername: "mousuf",
  blogUrl: "https://substack.com/@mousufnayon",
  cvUrl: "https://drive.google.com/file/d/1x1Z8686rzYo0Ubkou2oUp4dVbpX-VTOd/view?usp=sharing",
  //institutionUrl: "...",
  // altName: "",
  // secretDescription: "I like dogs and also cats.",
};
