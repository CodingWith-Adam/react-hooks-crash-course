function Menu({ userName }) {
  return (
    <div>
      Menu
      <uL>
        <li>
          <a href="/">{userName}</a>
        </li>
      </uL>
    </div>
  );
}

export default Menu;
