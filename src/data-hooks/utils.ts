export const useGreetings = () => {
  const now = new Date();
  const hours = now.getHours();
  if (hours > 0 && hours < 12) {
    return "Good Morning Cheeqoo ";
  }
  if (hours >= 12 && hours < 16) {
    return "Good After noon 🦆";
  }
  return "Good Evening";
};
