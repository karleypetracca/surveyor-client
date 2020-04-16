import React from "react";
import styled from "styled-components";

const DashboardStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 90vh;
	text-align: center;
`;

const Dashboard = () => {
	return (
		<DashboardStyled>
			<h1>This is the dashboard</h1>
		</DashboardStyled>
	);
};

export default Dashboard;
