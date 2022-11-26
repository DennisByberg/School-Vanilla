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

const data = getGoals();

export { data };
