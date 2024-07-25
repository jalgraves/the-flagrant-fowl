{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "the-flagrant-fowl.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "the-flagrant-fowl.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "the-flagrant-fowl.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "the-flagrant-fowl.targetPort" -}}
{{- printf "http-%s" (include "the-flagrant-fowl.name" .) | trunc 15 | trimSuffix "-" -}}
{{- end -}}

{{/*
Common labels
*/}}
{{- define "the-flagrant-fowl.labels" -}}
helm.sh/chart: {{ include "the-flagrant-fowl.chart" . }}
{{ include "the-flagrant-fowl.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "the-flagrant-fowl.selectorLabels" -}}
app.kubernetes.io/name: {{ include "the-flagrant-fowl.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "the-flagrant-fowl.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "the-flagrant-fowl.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{- define "imageString" -}}
{{- if eq .Values.global.env "dev" }}
{{- default .Values.image.name }}
{{- else }}
{{- default "%s:%s" .Values.image.name .Values.image.tag }}
{{- end }}
{{- end }}
