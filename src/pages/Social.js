import NavBar from '../components/navbar/center_title_bar';
import SocialLink from '../components/social_link';

export default function Eventi() {
	return (
		<div>
			<NavBar title="Social" />
			<div className="divider"></div>
			<SocialLink social_name="Instagram" color="#39108A" social_link="https://www.instagram.com/minierabeigua/" />
			<SocialLink social_name="Facebook" color="#6D3EBB" social_link="https://www.facebook.com/profile.php?id=100083037644566" />
			<SocialLink social_name="YouTube" color="#A06BEE" social_link="https://www.youtube.com/channel/UCAHcFqS4RI5W9bqTMVyQjvw" />
		</div>
	);
}