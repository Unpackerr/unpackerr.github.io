# The beginning: https://github.com/Unpackerr/unpackerr/pull/459
# The generator: https://github.com/Unpackerr/unpackerr/tree/main/init/config

UNPACKERR_BRANCH=${UNPACKERR_BRANCH:-main}

# We do this because go cache will download an older version.
go env -w 'GOPRIVATE=github.com/Unpackerr/*'

# Run the config generator directly from github.
go run github.com/Unpackerr/unpackerr/init/config@${UNPACKERR_BRANCH} --type docusaurus --output docs/install/generated

# Docusaurus MDX v2 needs :::note[Title]; the generator still emits :::note Title.
python3 - <<'PY'
from pathlib import Path
import re
pat = re.compile(
    r"^(:::(?:note|tip|info|caution|danger|warning|important|success|secondary)) +(.+)$",
    re.M,
)
for path in Path("docs/install/generated").glob("*.md"):
    text = path.read_text()
    updated = pat.sub(r"\1[\2]", text)
    if updated != text:
        path.write_text(updated)
PY
