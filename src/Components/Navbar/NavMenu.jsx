

export default function NavMenu(){

    const styles = {
      li: {
          listStyleType: 'none',
          display: 'inline-block',
      },
        link: {
            display: 'inline-block',
            padding: '5px 10px',
            textDecoration: 'none',
            textTransform: 'capitalize'
        }
    };

    const lists = ['services', 'pricing', 'about'];
    const menuItems = lists.map(list => (
        <li style={styles.li}>
            <a href={'/'+list} style={styles.link}>{list}</a>
        </li>
    ))

    return <ul>{menuItems}</ul>
}