import { FaUserAstronaut } from 'react-icons/fa6';

import { useTmdbImg } from './TmdbConfigProvider';

import classes from './CastMemberCard.module.css';

function CastMemberCard({ castMember }) {
  const imageUrl = useTmdbImg(castMember.profile_path, 'w138_and_h175_face');
  return (
    <div className={classes['cast-member']}>
      {castMember.profile_path ? (
        <img className={classes['cast-member-image']} src={imageUrl} alt={castMember.name} />
      ) : (
        <div className={classes['cast-member-dummy']}>
          <FaUserAstronaut size={'5rem'} color="#9b9999" />
        </div>
      )}

      <div className={classes['cast-member-info']}>
        <h4>{castMember.name}</h4>
        <p>{castMember.character}</p>
      </div>
    </div>
  );
}

export default CastMemberCard;
