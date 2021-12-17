import { MouseEventHandler } from 'react';
import { GenreResponseProps } from '../App';
import { Button } from './Button';

interface SideBarProps {
  genres: GenreResponseProps[];
  onClick: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ genres, onClick, selectedGenreId }: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
