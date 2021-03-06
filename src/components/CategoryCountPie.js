import React, { PropTypes } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { categoryToColor } from '../utils/utils.js';

const CategoryCountPie = ({ data, n }) => {
  return (
    <PieChart
      width={1000}
      height={400}>
      <Pie
        data={data}
        nameKey="category"
        innerRadius={75}
        minAngle={3}
        paddingAngle={2}
        label={(datum) => `${datum.category} - ${(datum.count / n * 100).toFixed(2)}%`}
        valueKey="count">
        {
          data.map((datum, index) => <Cell fill={categoryToColor(datum.category)} key={index} />)
        }
      </Pie>
    </PieChart>
  );
};

CategoryCountPie.propTypes = {
  data: PropTypes.array,
  n: PropTypes.number
};

export default CategoryCountPie;
