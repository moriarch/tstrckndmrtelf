import React, { useEffect } from "react";
import { useState } from "react";
import { useAppState } from "../../store";
import { ACTION_CHANGE_URL } from "../../store/Reducers";
import styles from "./Filter.module.css";
export default function Filter() {
  const [form, setForm] = useState(null);
  const [init, setInit] = useState(null);
  const { dispatch } = useAppState();

  function onChange({ target: { name, value } }) {
    if (value === "all" || value.length === 0) {
      delete form[name];
      setForm(Object.keys(form).length === 0 ? null : { ...form });
    } else setForm({ ...form, [name]: value });
  }

  useEffect(() => {
    if (init)
      dispatch({
        type: ACTION_CHANGE_URL,
        payload:
          "https://rickandmortyapi.com/api/character/?" +
          new URLSearchParams(form).toString(),
      });
    else setInit(true);
  }, [form]);

  return (
    <form className={styles.filter}>
      <input
        type="text"
        id="name"
        placeholder="Name"
        name="name"
        onInput={(e) => onChange(e)}
      />
      <select name="status" id="status" onChange={(e) => onChange(e)}>
        <option value="all">Status</option>
        <option value="dead">Dead</option>
        <option value="alive">Alive</option>
        <option value="unknown">unknown</option>
      </select>
      <select name="gender" id="gender" onInput={(e) => onChange(e)}>
        <option value="all">Gender</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="genderless">genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <input
        type="text"
        id="species"
        name="species"
        placeholder="Species"
        onInput={(e) => onChange(e)}
      />
      <input
        type="text"
        id="type"
        name="type"
        placeholder="Type"
        onInput={(e) => onChange(e)}
      />
      <input type="reset" value="Reset" onClick={() => setForm(null)} />
    </form>
  );
}
