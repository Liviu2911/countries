export const getPop = (pop: number) => {
  let population = pop.toString().split("")
  const len = population.length
  let res = population.slice(0, len % 3).join("")
  for (let i = len % 3; i < len; i++)
    res += (i - (len % 3)) % 3 ? population[i] : `,${population[i]}`
  if (res[0] === ",") res = res.slice(1)

  return res
}
