import React from "react";
import styled from "styled-components";
function Pagination() {
  const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  `;
  const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 16px;
  `;
  return (
    <div>
      <Layout>
        <Nav>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button>&gt;</button>
        </Nav>
      </Layout>
    </div>
  );
}

export default Pagination;
