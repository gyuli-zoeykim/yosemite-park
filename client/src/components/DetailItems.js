import React from 'react';
import './DetailItems.css';

const DetailItem = () => {
  const detailItems = [
    {
      imageSrc:
        'https://yosemite.org/wp-content/uploads/2019/07/WILDLIFE-MANAGEMENT.svg',
      title: 'Wildlife Management',
    },
    {
      imageSrc:
        'https://yosemite.org/wp-content/uploads/2019/07/CULTURE-AND-HISTORY.svg',
      title: 'Historic Preservation',
    },
    {
      imageSrc:
        'https://yosemite.org/wp-content/uploads/2019/07/HABITAT-RESTORATION.svg',
      title: 'Habitat Restoration',
    },
    {
      imageSrc:
        'https://yosemite.org/wp-content/uploads/2019/07/SCIENTIFIC-RESEARCH.svg',
      title: 'Scientific Research',
    },
    {
      imageSrc:
        'https://yosemite.org/wp-content/uploads/2019/07/TRAIL-REHAB.svg',
      title: 'Trail Rehabilitation',
    },
    {
      imageSrc:
        'https://yosemite.org/wp-content/uploads/2019/07/YOUTH-IN-YOSEMITE.svg',
      title: 'Youth In Yosemite',
    },
    {
      imageSrc:
        'https://yosemite.org/wp-content/uploads/2019/07/VISITOR-ENRICHMENT.svg',
      title: 'Visitor Services',
    },
  ];

  return (
    <div className="items">
      {detailItems.map((item, index) => (
        <div key={index} className="contents">
          <figure className="areas-of-focus logo">
            <img
              className="responsive-image"
              src={item.imageSrc}
              alt="decorative-icon"
            />
          </figure>
          <h5>{item.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default DetailItem;
