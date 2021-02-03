export const goToHome = (history) => {
  history.push("/");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToDetailTrip = (history, trip) => {
  console.log('function goToDetailTrip');
  history.push(`/detailtrip/${trip}`);
};

export const goToAllTrips = (history) => {
  history.push("/alltrips");
};
