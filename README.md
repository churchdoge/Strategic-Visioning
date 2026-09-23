# Chapter Strategic Planning

A web app for Sigma Chi chapter executive teams to build their annual strategic plan together, aligned to the Fraternity's Expect More strategic plan.

- **Officers** create an account, join their team with a six-character code, and work through five steps from the Chapter Strategic Planning workbook.
- **Team leaders** see a dashboard of everyone's progress and answers, consolidate input with Claude, and turn it into the chapter plan (imperatives, owners, goals, leaders, action plans, buy-in decisions). Plans download as a print-ready page or text.
- **Facilitators** (emails listed in `ADMIN_EMAILS`) see every team and edit the Expect More content every chapter sees.

## What runs where

Everything runs on Render. No Firebase is needed.

| Piece | Render service | Notes |
|---|---|---|
| Web app and API | Web Service (Node) | `server.js` serves the site and the API |
| Data | Render Postgres | Accounts, sessions, teams, submissions, plans |
| Claude consolidation | Anthropic API | Called from the server with your API key; never exposed to browsers |

## Deploy

1. **Create a GitHub repository** (private is fine) and upload every file in this folder except `node_modules`.
2. **In Render**, choose **New > Blueprint**, connect the repository, and select it. Render reads `render.yaml` and creates the web service and the Postgres database together.
3. **Fill in the two secrets** Render prompts for:
   - `ADMIN_EMAILS`: your email (comma-separate to add more facilitators).
   - `ANTHROPIC_API_KEY`: a key from console.anthropic.com. Leave it blank to run without Claude; the dashboard then does a basic merge of matching answers.
4. **Deploy.** When it's live, open the `onrender.com` address and create an account with the email you put in `ADMIN_EMAILS`. That account gets the Facilitator view.
5. **Optional:** add a custom domain (for example `plan.sigmachi.org`) under the web service's Settings.

`SESSION_SECRET` is generated automatically. The database tables are created on first start.

## Costs

`render.yaml` uses the Starter web service and the smallest paid Postgres plan, both in Ohio. Check current pricing on Render before deploying. Don't use Render's free Postgres; it expires after 30 days and the data goes with it.

Claude usage is billed to the Anthropic account behind the API key. Each consolidation is one request, and the server limits each leader to 30 per hour.

## Accounts and passwords

- Anyone with the site address can create an account. They see nothing until they join a team with its code.
- There's no email service, so password resets go through people: a team leader selects **Reset password** next to an officer on the dashboard and shares the temporary password privately. Facilitators can reset anyone except other facilitators. Everyone can change their password under **Account**.

## Who can see what

| Data | Officer | Team leader | Facilitator |
|---|---|---|---|
| Own submissions | Read and edit | Read and edit | Read and edit |
| Teammates' submissions | No | Read | Read |
| Consolidated themes | No | Read and edit | Read and edit |
| Chapter plan | Read once shared | Read and edit | Read and edit |
| Other teams | No | No | Read |
| Expect More content | Read | Read | Edit |

Rules are enforced on the server in `server.js` (`access()`), not just hidden in the page.

## Local development

```bash
cp .env.example .env    # then edit values
npm install
node --env-file=.env server.js
```

Requires Node 20+ and a local Postgres database.

## Files

- `server.js`: Express server, sign-in, access rules, Claude proxy
- `db.js`: Postgres connection and schema
- `prompts.js`: the instructions Claude follows when consolidating each step
- `public/`: the web app (HTML, CSS, JavaScript)
- `render.yaml`: Render blueprint
