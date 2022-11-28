const URL = "https://unstats.un.org/SDGAPI";

async function getGoals() {
  try {
    const resp = await fetch(`${URL}/v1/sdg/Target/List?includechildren=false`);
    const data = await resp.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function getBasicGoals() {
  try {
    const resp = await fetch(`${URL}/v1/sdg/Goal/List`);
    const data = await resp.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

// call the functions...
const data = getGoals();
const basicData = getBasicGoals();

export { data, basicData };
