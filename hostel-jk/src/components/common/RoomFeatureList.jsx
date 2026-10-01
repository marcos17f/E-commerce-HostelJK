import { FaCheck } from 'react-icons/fa6';

export default function RoomFeatureList({ itens }) {
  return (
    <ul className="room-feature-list">
      {itens.map((item) => (
        <li key={item} className="room-feature-list__item">
          <FaCheck className="room-feature-list__check" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
