const Footer: React.FC = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/home"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          aria-label="Our Site Name"
        >
          Site Name
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2025 Company, Inc
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="nav-item ms-3">
          <a href="/" className="text-body-secondary" aria-label="Instagram">
            <svg className="bi" width="24" height="24" aria-hidden="true">
              <use href="#instagram"></use>
            </svg>
          </a>
        </li>
        <li className="nav-item ms-3">
          <a className="text-body-secondary" href="#" aria-label="Facebook">
            <svg className="bi" width="24" height="24">
              <use href="#facebook"></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
