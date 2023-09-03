import React from "react"
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  BadgeDelta,
  DeltaType,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react"
import { useState } from "react"

import { IconBrandCashapp } from "@tabler/icons-react"

// entry as in "passbook entry"
type Entry = {
  id: string
  description: string
  category: string
  date: string
  amount: number
}

const expendituresArr: Entry[] = [
  {
    id: "1",
    description: "Stipend",
    category: "Income",
    date: "1.9",
    amount: 50000,
  },
  {
    id: "2",
    description: "Sks Lunch",
    category: "Food",
    date: "1.9",
    amount: -107,
  }
]

export default function Expenditures() {
  const [selectedNames, setSelectedNames] = useState<string[]>([])

  const isSalesPersonSelected = (salesPerson: Entry) =>
    selectedNames.includes(salesPerson.id) || selectedNames.length === 0

  return (
    <div className="p-2">
      <MultiSelect
        onValueChange={setSelectedNames}
        placeholder="select category"
        className="max-w"
      >
        {expendituresArr.map(item => (
          <MultiSelectItem key={item.id} value={item.id}>
            {item.description}
          </MultiSelectItem>
        ))}
      </MultiSelect>
      <Table className="mt-6">
        <TableBody>
          {expendituresArr
            .filter(item => isSalesPersonSelected(item))
            .map(item => (
              <TableRow key={item.id}>
                <TableCell className="text-center">
                  <IconBrandCashapp />
                </TableCell>
                <TableCell className="text-left">{item.description}</TableCell>
                <TableCell className="text-left">{item.date}</TableCell>
                <TableCell className="text-left">{item.category}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta
                    size="xs"
                    deltaType={item.amount > 0 ? "increase" : "decrease"}
                  >
                    {item.amount}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}
