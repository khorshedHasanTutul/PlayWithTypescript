interface User {
    id: number;
    name: string;
    email: string;
  }
  
  function fetchUser(userId: number): Promise<User | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user: User = {
          id: userId,
          name: "Rakibul Islam",
          email: "RakibulIslam@gmail.com",
        };
  
        resolve(user);
      }, 2000);
    });
  }
  
  async function displayUser(userId: number): Promise<void> {
    const user = await fetchUser(userId);
  
    if (user !== null) {
      //updating state and display user Information
    } else {
     //loading state
    }
  }
  
  displayUser(123);