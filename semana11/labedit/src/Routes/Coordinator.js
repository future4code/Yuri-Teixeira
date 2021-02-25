export function goToLogin(history) {
  history.push("/login");
}

export function goToSignUp(history) {
  history.push("/signup");
}

export function goToHome(history) {
  history.push("/home");
}

export function goToDetailsPost(history,id) {
  history.push(`/home/${id}`);
}
