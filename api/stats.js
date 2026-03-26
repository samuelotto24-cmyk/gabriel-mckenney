export const config = { runtime: 'edge' };

const REDIS_URL   = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const PASSWORD    = process.env.DASHBOARD_PASSWORD || 'Gabriel2024';

async function redis(commands) {
  const res = await fetch(`${REDIS_URL}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
  });
  return res.json();
}

function parseHash(item) {
  if (!item || !item.result) return {};
  const obj = {};
  for (let i = 0; i < item.result.length; i += 2) {
    obj[item.result[i]] = parseInt(item.result[i + 1], 10);
  }
  return obj;
}

export default async function handler(req) {
  const url = new URL(req.url);
  if (url.searchParams.get('password') !== PASSWORD) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const results = await redis([
      ['HGETALL', 'gabriel:pageviews'],
      ['HGETALL', 'gabriel:referrers'],
      ['HGETALL', 'gabriel:countries'],
      ['HGETALL', 'gabriel:clicks'],
      ['HGETALL', 'gabriel:hourly'],
      ['HGETALL', 'gabriel:devices'],
      ['HGETALL', 'gabriel:browsers'],
      ['HGETALL', 'gabriel:os'],
      ['HGETALL', 'gabriel:cities'],
      ['HGETALL', 'gabriel:languages'],
      ['HGETALL', 'gabriel:visitors'],
      ['HGETALL', 'gabriel:scroll'],
      ['HGETALL', 'gabriel:duration'],
      ['HGETALL', 'gabriel:duration_count'],
      ['HGETALL', 'gabriel:conversions'],
    ]);

    return new Response(JSON.stringify({
      pageviews:      parseHash(results[0]),
      referrers:      parseHash(results[1]),
      countries:      parseHash(results[2]),
      clicks:         parseHash(results[3]),
      hourly:         parseHash(results[4]),
      devices:        parseHash(results[5]),
      browsers:       parseHash(results[6]),
      os:             parseHash(results[7]),
      cities:         parseHash(results[8]),
      languages:      parseHash(results[9]),
      visitors:       parseHash(results[10]),
      scroll:         parseHash(results[11]),
      duration:       parseHash(results[12]),
      duration_count: parseHash(results[13]),
      conversions:    parseHash(results[14]),
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to load data' }), { status: 500 });
  }
}
