import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { bouncingAtom, searchTextAtom } from "../../store/atoms";
import { Dropdown, MenuProps, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        to="/karan-aujla"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {" "}
        Karan Aujla
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        to="/ranjit-bawa"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {" "}
        Ranjit Bawa
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link
        to="/harbhajan-maan"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Harbhajan Maan
      </Link>
    ),
  },
];

function Header() {
  const [isBouncing, setIsBouncing] = useAtom(bouncingAtom);
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  return (
    <nav className="bg-gray-800 sticky top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center"></div>
            <div className=" sm:block sm:ml-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setIsBouncing(!isBouncing);
                  }}
                >
                  Toggle
                </button>
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Singers
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
                {/* <Link
                  to="/karan-aujla"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  karan aujla
                </Link>
                <Link
                  to="/ranjit-bawa"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Ranjit Bawa
                </Link>
                <Link
                  to="/harbhajan-maan"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Harbhajan Maan
                </Link> */}
                <input
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
