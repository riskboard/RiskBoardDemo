import React, { Component } from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick'

export default (props) => {
	const data = props.data;
	return <LineChart data={data} />
}