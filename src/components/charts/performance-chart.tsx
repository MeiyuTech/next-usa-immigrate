'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedCard } from '@/components/ui/animated-elements'

const data = [
  {
    name: '2023',
    'Ho**i**g': 1526167,
    'Ne**i': 904752,
    'S**g**i': 1587810,
  },
  {
    name: '2022',
    'Ho**i**g': 1691396,
    'Ne**i': 152943,
    'S**g**i': 803012,
  },
  {
    name: '2021',
    'Ho**i**g': 1908839,
    'Ne**i': 0,
    'S**g**i': 0,
  },
]

export function PerformanceChart() {
  return (
    <AnimatedCard className="col-span-2 p-6">
      <CardHeader>
        <CardTitle className="text-xl">营业额（单位：美元）</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                formatter={(value) =>
                  new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(value as number)
                }
              />
              <Bar dataKey="Ho**i**g" fill="#008080" />
              <Bar dataKey="Ne**i" fill="#00a0a0" />
              <Bar dataKey="S**g**i" fill="#00c0c0" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </AnimatedCard>
  )
}
