export const goToHome = (history) => {
  history.push("/");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToDetailTrip = (history, id) => {
  history.push(`/detailtrip/${id}`);
};

export const goToSignCandidate = (history, id) => {
  history.push(`/SignCandidate/${id}`);
};

export const goToAllTrips = (history) => {
  history.push("/alltrips");
};

export const goToCreateTrip = (history) => {
  history.push("/createtrip");
};

export const goToAproveCandidates = (history) => {
  history.push("/aprovecandidates");
};