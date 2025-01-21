// src/services/mockUserApi.js

// -- In-memory data structures --

let clubs = [
    { id: 1, name: "Chess Club", positions: ["President", "Secretary"] },
    { id: 2, name: "Drama Club", positions: ["Director", "Actor"] },
  ];
  
  let candidates = [
    { id: 1, name: "Alice", clubId: 1, position: "President", votes: 3 },
    { id: 2, name: "Bob", clubId: 2, position: "Director", votes: 5 },
  ];
  
  let applications = [
    // Candidate's applications:  name => user.varsityId
    { id: 1, name: "cand111", clubId: 1, position: "Secretary", status: "pending" },
  ];
  
  let events = [
    {
      id: 1,
      name: "Spring 2025 Elections",
      description: "Major spring election for all clubs",
      startDate: "2025-04-01",
      endDate: "2025-04-15",
      lineItems: [
        { clubId: 1, position: "President", candidateIds: [1] },
        { clubId: 2, position: "Director", candidateIds: [2] },
      ],
    },
    {
      id: 2,
      name: "Summer 2025 Elections",
      description: "Upcoming summer elections for next term",
      startDate: "2025-06-01",
      endDate: "2025-06-10",
      lineItems: [],
    },
  ];
  
  // ====== EVENTS ======
  export function getAllEvents() {
    return Promise.resolve([...events]);
  }
  export function getEventById(id) {
    const evt = events.find(e => e.id === id);
    return Promise.resolve(evt || null);
  }
  
  // ====== CLUBS ======
  export function getAllClubs() {
    return Promise.resolve([...clubs]);
  }
  
  // ====== CANDIDATES / VOTES ======
  export function getAllCandidates() {
    return Promise.resolve([...candidates]);
  }
  
  export function voteForCandidate(candidateId) {
    candidates = candidates.map(c =>
      c.id === candidateId ? { ...c, votes: c.votes + 1 } : c
    );
    return Promise.resolve(true);
  }
  
  // ====== APPLICATIONS FOR CANDIDATES ======
  export function getMyApplications(userName) {
    // userName is user.varsityId in context
    return Promise.resolve(applications.filter(app => app.name === userName));
  }
  
  export function createApplication({ name, clubId, position }) {
    const newApp = {
      id: applications.length + 1,
      name,
      clubId,
      position,
      status: "pending",
    };
    applications.push(newApp);
    return Promise.resolve(newApp);
  }
  