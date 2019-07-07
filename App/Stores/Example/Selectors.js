export const liveInEurope = (state) => {
  if (Object.entries(state.example.user).length <= 0) return null

  let europeanCities = ['Gwenborough', 'Wisokyburgh', 'McKenziehaven', 'South Elvis', 'Roscoeview']

  return europeanCities.includes(state.example.user.address.city)
}
