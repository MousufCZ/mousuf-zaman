export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
      title: "3D material science simulation - Full Stack Software Developer, Data Engineer",
      /*description:
        "...",*/
      technologies: ["Python", "C++", "MySQL", "SciPy", "NumPy", "Qt", "pymatgen"],
      //projectUrl: "https://project-demo.com",
      imageUrl: "https://images.unsplash.com/photo-1773291934216-b44b95456491?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A digital twin and 3D graphics software that evaluates material performance for the insurance industry. Worked with subject matter experts to identify engineering challenges and develop solutions."
  },
  {
    title: "CPU hardware data agent & research thesis - Software Developer, AI Engineer",
    /* description:
      "...",*/
    technologies: ["Python", "LangChain", "Ollama", "Open API", "Tableau", "Statistical Analysis", "NumPy", "Pandas", "ChromaDB"],
    //projectUrl: "https://project-demo.com",
    imageUrl: "https://images.unsplash.com/photo-1717962688747-7e13dfa31538?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "CPU hardware data driven chatbot for CPU design architects. Resolved operational bottleneck, developed analytical dashboard and authored 15,000 word thesis documenting research methodology and findings."
  },
];
