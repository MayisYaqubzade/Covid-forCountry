"use client";

import Image from "next/image";

export default function TableContent({ data }) {
  console.log(data);
  const countries = data.map((co) => {
    co.countryInfo.iso2 = new String(co.countryInfo.iso2).toLocaleLowerCase();
    return co;
  });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[1200px] m-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Countries
            </th>
            <th scope="col" className="px-6 py-3">
              Active
            </th>
            <th scope="col" className="px-6 py-3">
              Deaths
            </th>
            <th scope="col" className="px-6 py-3">
              Recovered
            </th>
            <th scope="col" className="px-6 py-3">
              Total Cases
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {country.country}
              </th>
              <td className="px-6 py-4">{country.active}</td>
              <td className="px-6 py-4">{country.deaths}</td>
              <td className="px-6 py-4 ">{country.recovered}</td>
              <td className="px-6 py-4">{country.cases}</td>
              <td className="px-6 py-4">
                <Image
                  src={`https://flagcdn.com/w320/${country.countryInfo.iso2}.png`}
                  alt={"flag of" + country.country}
                  width={30}
                  height={30}
                  priority={true}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
