const URL =
  "https://unstats.un.org/SDGAPI/v1/sdg/Target/List?includechildren=false";

async function getGoals() {
  try {
    const resp = await fetch(`${URL}/v1/sdg/Goal/List`);
    const data = await resp.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const data = getGoals();

export { data };
