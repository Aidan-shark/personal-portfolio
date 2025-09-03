// Hero section icons with links
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon';
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon';

export const heroIcons = [
  {
    id: "linkedin",
    icon: <LinkedinLineIcon className="w-6 h-6" aria-label="LinkedIn" />,
    url: "https://linkedin.com/in/your-profile"
  },
  {
    id: "github",
    icon: <GithubLineIcon className="w-6 h-6" aria-label="GitHub" />,
    url: "https://github.com/your-username"
  },
  {
    id: "dribbble",
    icon: <DribbbleLineIcon className="w-6 h-6" aria-label="Dribbble" />,
    url: "https://dribbble.com/your-profile"
  }
];
