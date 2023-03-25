'use client'
import { useState, useEffect } from 'react';

import SearchBox from "@/components/SearchBox/SearchBox";
import TableContent from "@/components/Table/TableContent";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://corona.lmao.ninja/v2/countries')
      .then(res => res.json())
      .then(res => setData(res))
  }, [])
  return (
    <main >
      <SearchBox setData={setData} />
      <TableContent data={data} />
    </main>
  )
}
