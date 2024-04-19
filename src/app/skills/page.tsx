import * as style from '../styles/skills/skills.css';
import Html5Icon from '../assets/html5.svg';
import CssIcon from '../assets/css3.svg';
import JavascriptIcon from '../assets/javascript.svg';
import ReactIcon from '../assets/react.svg';
import NextJsIcon from '../assets/nextdotjs.svg';
import TypeScriptIcon from '../assets/typescript.svg';
import RecoilIcon from '../assets/recoil.svg';
import ReactQueryIcon from '../assets/reactquery.svg';
import ReactHookFormIcon from '../assets/reacthookform.svg';
import StyledComponentsIcon from '../assets/styledcomponents.svg';
import VanillaExtractIcon from '../assets/vanilla-extract.svg';
import NodejsIcon from '../assets/nodedotjs.svg';
import ExpressJsIcon from '../assets/express.svg';
import MongoDBIcon from '../assets/mongodb.svg';
import MongooseIcon from '../assets/mongoose.svg';
import AwsIcon from '../assets/amazonaws.svg';
import VercelIcon from '../assets/vercel.svg';
import GitIcon from '../assets/git.svg';
import GithubIcon from '../assets/github.svg';

export default function Skills() {
  return (
    <div className={style.wrapper}>
      <div className={style.front_stack_item}>
        <h2 className={style.title}>Frontend</h2>
        <div className={style.icons_wrapper}>
          <div className={style.icon_container}>
            <Html5Icon className={style.html_icon} />
            <span className={style.icon_title}>HTML5</span>
          </div>
          <div className={style.icon_container}>
            <CssIcon className={style.css_icon} />
            <span className={style.icon_title}>CSS3</span>
          </div>
          <div className={style.icon_container}>
            <JavascriptIcon className={style.javascript_icon} />
            <span className={style.icon_title}>javascript</span>
          </div>
          <div className={style.icon_container}>
            <TypeScriptIcon className={style.typescript_icon} />
            <span className={style.icon_title}>typescript</span>
          </div>
          <div className={style.icon_container}>
            <ReactIcon className={style.react_icon} />
            <span className={style.icon_title}>React</span>
          </div>
          <div className={style.icon_container}>
            <NextJsIcon className={style.nextjs_icon} />
            <span className={style.icon_title}>Next.js</span>
          </div>
          <div className={style.icon_container}>
            <RecoilIcon className={style.recoil_icon} />
            <span className={style.icon_title}>recoil</span>
          </div>
          <div className={style.icon_container}>
            <ReactQueryIcon className={style.react_query_icon} />
            <span className={style.icon_title}>react-query</span>
          </div>
          <div className={style.icon_container}>
            <ReactHookFormIcon className={style.react_hook_form_icon} />
            <span className={style.icon_title}>react-query</span>
          </div>
          <div className={style.icon_container}>
            <StyledComponentsIcon className={style.styledcomponents_icon} />
            <span className={style.icon_title}>styled-components</span>
          </div>
          <div className={style.icon_container}>
            <VanillaExtractIcon className={style.icon_size} />
            <span className={style.icon_title}>vanilla-extract</span>
          </div>
        </div>
      </div>
      <div className={style.back_stack_item}>
        <h2 className={style.title}>Backend</h2>
        <div className={style.icons_wrapper}>
          <div className={style.icon_container}>
            <NodejsIcon className={style.nodejs_icon} />
            <span className={style.icon_title}>node.js</span>
          </div>
          <div className={style.icon_container}>
            <ExpressJsIcon className={style.expressjs_icon} />
            <span className={style.icon_title}>express.js</span>
          </div>
          <div className={style.icon_container}>
            <MongoDBIcon className={style.nodejs_icon} />
            <span className={style.icon_title}>MongoDB</span>
          </div>
          <div className={style.icon_container}>
            <MongooseIcon className={style.mongoose_icon} />
            <span className={style.icon_title}>mongoose</span>
          </div>
        </div>
      </div>
      <div className={style.grid_item}>
        <h2 className={style.title}>Deployment</h2>

        <div className={style.icons_wrapper}>
          <div className={style.icon_container}>
            <AwsIcon className={style.aws_icon} />
            <span className={style.icon_title}>Amazon AWS</span>
          </div>
          <div className={style.icon_container}>
            <VercelIcon className={style.vercel_icon} />
            <span className={style.icon_title}>Vercel</span>
          </div>
        </div>
      </div>
      <div className={style.grid_item}>
        <h2 className={style.title}>Version Control</h2>
        <div className={style.icons_wrapper}>
          <div className={style.icon_container}>
            <GitIcon className={style.git_icon} />
            <span className={style.icon_title}>git</span>
          </div>
          <div className={style.icon_container}>
            <GithubIcon className={style.github_icon} />
            <span className={style.icon_title}>github</span>
          </div>
        </div>
      </div>
    </div>
  );
}
