import React, { Component } from 'react';
import ReactChartkick, { AreaChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

export default (props) => {
	const data = props.data;
	return <AreaChart data={data} />
}