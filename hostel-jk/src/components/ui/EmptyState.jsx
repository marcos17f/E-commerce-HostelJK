import { FaRegFolderOpen } from 'react-icons/fa6';
import Icon from './Icon.jsx';

export default function EmptyState({ icone = FaRegFolderOpen, titulo, descricao, children }) {
  return (
    <div className="empty-state" role="status">
      <span className="empty-state__icon">
        <Icon icon={icone} size={26} />
      </span>
      <p className="empty-state__title">{titulo}</p>
      {descricao && <p className="empty-state__desc">{descricao}</p>}
      {children && <div className="empty-state__action">{children}</div>}
    </div>
  );
}
