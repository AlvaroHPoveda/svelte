<script lang="ts">
  import type { WatherDataInterface } from "../interfaces/Weather";

  import ErrorAlert from "./ErrorAlert.svelte";
  import Loading from "./Loading.svelte";
  import WeatherData from "./WeatherData.svelte";

  let city = "";
  const key = "6ae50eeb73b440cda906389ec9ac3eff";
  const getWeatherData = async (city: string = "bogota") => {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    if (city.trim() === "") {
      throw new Error(
        "It is necessary to fill the fields with valid information"
      );
    }
    const res: Response = await fetch(baseUrl);
    if (!res.ok) throw new Error("This place coul not found");

    // axios
    // const data: WatherDataInterface = await res.json();
    // if (data.cod !== 200) {
    //   throw new Error("This place coul not found");
    // }

    const data: WatherDataInterface = await res.json();
    return data;
  };
  let promise = getWeatherData();
  const handleSubmit = () => {
    promise = getWeatherData(city);
    city = "";
  };
</script>

<div class="container">
  <div class="row">
    <div class="col-12 mb-3">
      <form on:submit|preventDefault={handleSubmit}>
        <label for="">
          City : <input bind:value={city} class="form-control" />
        </label>
        <button type="submit" class="btn btn-info">Search</button>
      </form>
    </div>

    {#await promise}
      <Loading />
    {:then weather}
      <WeatherData {weather} />
    {:catch err}
      <ErrorAlert {err} />
    {/await}
  </div>
</div>
